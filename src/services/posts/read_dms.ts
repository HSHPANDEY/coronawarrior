import _ from 'lodash';
import PostCollection from './models/posts';
import Configs from './configs';
const searchPostsByTagsAndZones = async (tags: string | string[], zones: string | string[], projection: { limit, skip}) => {
  const query: any = {};
  if (!_.isEmpty(tags)){
    if(_.isArray(tags)) {
      query.tags = { '$all': tags };
    } else {
      query.tags = tags;
    }
  };

  if (!_.isEmpty(zones)) {
    if(_.isArray(zones)) {
      query.zones = { '$all': zones };
    } else {
      query.zones = zones;
    }
  }

  query.state = Configs.PostStates.ACTIVE;
  return await PostCollection.find(query).skip(projection.skip).limit(projection.limit).sort({ created_at: 'desc' });
}

export default {
  searchPostsByTagsAndZones
}