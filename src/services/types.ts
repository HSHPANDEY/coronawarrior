
interface IKeyAndNameResponse {
  key: String,
  name: String
}

interface IDelayTime {
  delay_in_day?: number,
  delay_in_hrs?: number,
  delay_in_minutes?: number
}


export interface IService {
  getPostSearchConfig?: (data: {}) => { data: { zones: IKeyAndNameResponse[], tags: IKeyAndNameResponse[] }},
  getPosts?: (data: { tags: string[], zones: string[]}) => any,
  performActionOnPosts?: (data: { post_id: String, action_data: { action_type: string, time?: IDelayTime}}) => {}
}