interface IDemoUrl {
  url:string,
  label:string
}
interface IRepository {
    repository_private:boolean,
    repository_text?:{'En':string,'Ru':string}
    repository_url?:string,
}
export interface IProjects {
    id:number,
    title:{'En':string,'Ru':string},
    demo_urls:IDemoUrl[],
    repositories:IRepository[]
    icon:string,
    bullets:{'En':string,'Ru':string}[]
    slides:string[]
}