import mongoose from 'mongoose';

let postsSchema = {
  created_by_id: String,
  updated_by_id: String,
  post_data: {
    title: String,
    message: String,
    contacts: {
      number: Number,
      name: String
    }
  },
  tags: [{
    type: String
  }],

  down_vote_count: Number,
  up_vote_count: Number,
  state: String,
  state_meta_data: {
    follow_up_time: Date
  },
  locations: [{
    type: String
  }]
}

export default mongoose.model('CovidPosts', new mongoose.Schema(postsSchema, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }} ));