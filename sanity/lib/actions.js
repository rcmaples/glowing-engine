import { useCallback } from 'react';
import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { client } from '@/sanity/lib/client';

export function CustomVisualEditingAction(props) {
  const { draft, published, type } = props;
  const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
  const clientWithToken = client.withConfig({ token });

  const getSlug = () => {
    if (!draft) {
      return published.slug?.current;
    } else {
      return draft.slug?.current;
    }
  };

  const handleClick = useCallback(async () => {
    // Replace with your actual preview URL
    // const previewUrl = 'http://localhost:3000/api/preview';

    const slug = getSlug();
    let previewBaseUrl = '';

    switch (process.env.NODE_ENV) {
      case 'development':
        previewBaseUrl = 'http://localhost:3000/api/draft-mode/enable';
        break;
      case 'production':
        previewBaseUrl =
          'https://glowing-engine.netlify.app/api/draft-mode/enable';
        break;
      default:
        previewBaseUrl = 'http://localhost:3000/api/draft-mode/enable';
        break;
    }

    const route = type + 's';

    const previewUrl = `${previewBaseUrl}/${route}/${slug || '404.html'}`;

    try {
      const validatedUrl = await validatePreviewUrl(
        clientWithToken,
        `http://localhost:3000/api/draft-mode/enable/${route}/${slug}`
      );
      console.log('validatedUrl', validatedUrl);
      // Add any additional parameters you need, like the document ID
      const urlWithParams = new URL(validatedUrl);
      urlWithParams.searchParams.append('id', draft?._id || published?._id);

      // Open the validated URL in a new tab
      window.open(urlWithParams.toString(), '_blank');
    } catch (err) {
      console.error('Failed to validate preview URL', err);
    }
  }, [clientWithToken, draft, published]);

  return {
    label: 'Open Visual Editor',
    onHandle: handleClick,
  };
}

export function openEditablePreview(props) {
  let previewBaseURL = '';

  switch (process.env.NODE_ENV) {
    case 'development':
      previewBaseURL = 'http://localhost:3000';
      break;
    case 'production':
      previewBaseURL = 'https://glowing-engine.netlify.app';
      break;
    default:
      previewBaseURL = 'http://localhost:3000';
      break;
  }

  const { id, type, published, draft } = props;
  const route = type + 's';

  const getSlug = () => {
    if (!draft) {
      return published.slug?.current;
    } else {
      return draft.slug?.current;
    }
  };

  return {
    label: 'Open Preview',
    onHandle: () => {
      const slug = getSlug();
      const url = `${previewBaseURL}/${route}/${slug || '404.html'}`;
      window.open(url, '_blank');
      // window.alert('👋 Hello from custom action');
    },
  };
}

export function HelloWorldAction(props) {
  return {
    label: 'Hello world',
    onHandle: () => {
      // Here you can perform your actions
      window.alert('👋 Hello from custom action');
    },
  };
}
