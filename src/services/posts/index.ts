import ReadPosts from './read_dms';
import WritePosts from './write_dms';
import moment from 'moment';
import Configs from './configs';
import _ from 'lodash';

const searchPosts = async (data) => {
  const { tags, zones, page_limit, page_count } = data;
  const posts = await ReadPosts.searchPostsByTagsAndZones(tags, zones, { limit: page_limit, skip: (page_count-1)*page_limit});
  return posts;
}

const addPosts = async (data) => {
  const addPostResponse = await WritePosts.addPosts(data);
  return {};
}

const upvotePost = async (data) => {
  if (data.post_id) return {};
  return await WritePosts.upvotePost(data.post_id);
}

const downvotePost = async (data) => {
  if (data.post_id) return {};
  return await WritePosts.downvotePost(data.post_id);
}

const archivePost = async (data) => {
  if (data.post_id) return {};
  return await WritePosts.archivePost(data.post_id);
}

const parkPost = async (data) => {
  if (data.post_id) return {};
  let delayDay = 1;
  let delayHours = 0;
  let delayMinutes = 0;
  if (data.follow_up_time) {
    delayDay = _.get(data.follow_up_time, 'delay_in_day', delayDay);
    delayHours = _.get(data.follow_up_time, 'delay_in_hrs', 0);
    delayMinutes = _.get(data.follow_up_time, 'delay_in_minutes', 0);
  }

  let delayTime = moment().utc().add(delayDay, 'days');
  if (delayHours) {
    delayTime = delayTime.startOf('day').hour(delayHours).minutes(delayMinutes);
  }

  const parkedPostResponse = await WritePosts.parkPost(data.post_id, delayTime.toDate());
  return parkedPostResponse;
}


const performActionOnPost = async (data) => {
  const actionType = _.get(data, 'action_data.action_type');
  let actionResponse;
  switch (actionType) {
    case Configs.PostActions.UPVOTE: actionResponse = await upvotePost(data);
    case Configs.PostActions.DOWNVOTE: actionResponse = await downvotePost(data);
    case Configs.PostActions.ARCHIVE: actionResponse = await archivePost(data);
    case Configs.PostActions.PARK: actionResponse = await parkPost(data);
    default: actionResponse = {};
  }

  return actionResponse;
}
export default {
  addPosts,
  performActionOnPost,
  searchPosts
}