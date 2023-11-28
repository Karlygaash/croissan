const apiUrls = {
    development: 'http://localhost:8000/api/v1/b2b',
    production: 'http://b2b.croissantgallery.kz/api/v1/b2b',
  };
  
  const getApiUrl = () => {
    return apiUrls.development;
  };
  
  export default getApiUrl;