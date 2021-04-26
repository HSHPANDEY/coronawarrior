enum PostStates {
  ACTIVE = 'active',
  ARCHIVE = 'archive',
  PARK = 'parked'
}


enum PostActions {
  ARCHIVE = 'archive',
  UPVOTE = 'upvote',
  DOWNVOTE = 'downvote',
  PARK = 'park'
}

export default {
  PostStates,
  PostActions
}