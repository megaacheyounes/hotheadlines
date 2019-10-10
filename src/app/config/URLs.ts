import { environment } from 'src/environments/environment';

export const QUERY_PARAMS = {
    API_KEY: 'apiKey',
    SOURCES: 'sources',
    SORT: 'sort',
    PAGE_SIZE: 'pageSize',
    PAGE: 'page',
    CATEGORY: 'category', // only for top-headlines url
    SEARCH: 'q',
    COUNTRY: 'country',
};

export const DEFAULTS = {
    API_KEY: environment.apiKey,
    SOURCES: `${QUERY_PARAMS.SOURCES}=abc-news,al-jazeera-english,bbc-news,business-insider,cnn,buzzfeed,bloomberg,bbc-sport,cnbc,daily-mail,` +
        `fox-news,google-news,ign,le-monde,msnbc,la-nacion,mtv-news,national-geographic,reuters,techradar,the-verge,the-next-web`,
    LATEST: `${QUERY_PARAMS.SORT}=publishedAt`,
    POPULAR: `${QUERY_PARAMS.SORT}=popularity`
};

const BASE_URL = 'htt' + 'ps://' + 'newsapi.org/v2/';

export const EVERYTHING_URL = `${BASE_URL}/everything?${QUERY_PARAMS.API_KEY}=${DEFAULTS.API_KEY}`;
export const TOP_HEADLINES_URL = `${BASE_URL}top-headlines?${QUERY_PARAMS.API_KEY}=${DEFAULTS.API_KEY}`;

export const FEEDBACK_URL =    /* 'http://localhost:3000' +  */'/feedback';

export const CATEGORY_ICON = category => `assets/categories/${category}.png`;
