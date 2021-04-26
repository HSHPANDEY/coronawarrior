
export interface IPostStoreData {
  posted_by: string,
  post_title: string,
  post_message: string,
  post_contacts: [{
    number: number,
    name: string
  }]
  post_tags: string[],
  relevent_locations: string[]
}

export interface IPostUpdateData {
  post_title?: string,
  post_message?: string,
  post_contacts?: [{
    number: number,
    name: string
  }]
  post_tags?: string[],
  relevent_locations?: string[]
}