import _ from 'lodash';
import PostCollection from './models/posts';
import { IPostStoreData, IPostUpdateData } from './types';
import Configs from './configs';
const addPosts = async (postData: IPostStoreData) => {
  const data = {
    created_by_id: postData.posted_by,
    updated_by_id: postData.posted_by,
    post_data: {
      title: postData.post_title,
      message: postData.post_message,
      contacts: postData.post_contacts
    },
    tags: postData.post_tags,
    down_vote_count: 0,
    up_vote_count: 0,
    status: Configs.PostStates.ACTIVE,
    locations: postData.relevent_locations
  };
  return await PostCollection.create(data);
}

const updatePost = async (postId: string, postUpdateData: IPostUpdateData, updatedById: string) => {
  // validate user
  // findAndupdate post_data
  const updateQuery: any = { updated_by_id: updatedById };
  const postData: any = {};
  if (postUpdateData.post_contacts) postData.contacts = postUpdateData.post_contacts;
  if (postUpdateData.post_title) postData.title = postUpdateData.post_title;
  if (postUpdateData.post_message) postData.message = postUpdateData.post_message;
  if (postUpdateData.post_tags) updateQuery.tags = postUpdateData.post_tags;
  if (postUpdateData.relevent_locations) updateQuery.locations = postUpdateData.relevent_locations;

  if (!_.isEmpty(postData)) updateQuery.post_data = postData;

  const updatedResp = await PostCollection.where({ _id: postId})
    .update({ $set: updateQuery}).exec();
  
  return updatedResp;
}

const upvotePost = async (postId: string) => {
  // findAndupdate count
  const updatedResp = await PostCollection.where({ _id: postId})
    .update({ $inc: { up_vote_count: 1 }}).exec();
  
  return updatedResp;
}

const downvotePost = async (postId: string) => {
  // findAndupdate counnt
  const updatedResp = await PostCollection.where({ _id: postId})
    .update({ $inc: { down_vote_count: 1 }}).exec();

  return updatedResp;
}

const archivePost = async (postId: string) => {
  const updatedResp = await PostCollection.where({ _id: postId})
    .update({ $set: { status: Configs.PostStates.ARCHIVE }}).exec();

  return updatedResp;
}

const parkPost = async (postId: string, followUpTime: Date) => {
  const updatedResp = await PostCollection.where({ _id: postId})
    .update({ $set: { status: Configs.PostStates.PARK,  state_meta_data: { follow_up_time : followUpTime}}}).exec();

  return updatedResp; 
}

export default {
  addPosts,
  upvotePost,
  downvotePost,
  archivePost,
  updatePost,
  parkPost
}