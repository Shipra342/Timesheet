interface projects{
    id:number,
    name:string
}
interface categories {
    id:number,
    user_id:string
}

export interface  DropDownStruct {
      projects:projects[],
      categories:categories[],
      status:string[]
}


export interface DailyTaskStruct {
    member_id:number,
    project_id:number,
    category_id:number,
    task_name:string,
    time_spend:number,
    comment:string,
    status:string,
    date:string,
}