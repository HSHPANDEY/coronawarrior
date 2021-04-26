import _ from 'lodash';

import TagsService from './tags';
import ZonesService from './zones';
import PostService from './posts';

import { IService } from './types';

const Service: IService = {};

Service.getPostSearchConfig = (params) => {
  return {
    data: {
      zones: ZonesService.getAllZones(),
      tags: TagsService.getAllTags()
    }
  }
}


Service.getPosts = async (params) => { 
  const { tags, zones } = params;
  // validate tags and zones
  const posts = await PostService.searchPosts(params);
  // format posts
  return posts;
}


Service.performActionOnPosts = async (params) => {
  const actionResponse = await PostService.performActionOnPost(params);
  return actionResponse;
}

export default Service;