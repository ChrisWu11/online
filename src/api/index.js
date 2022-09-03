import requests from "./axios";
export const getBlogList = (data)=>requests({url:'/blog/list',data,method:'get'})

export const addBlogs = (params)=>requests({url:'/blog/new',data:params,method:'post'})

export const deleteBlogs = (params)=>requests({url:'/blog/delete',data:params,method:'post'})