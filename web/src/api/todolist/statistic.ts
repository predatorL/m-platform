import req from '@/util/request';

export function getList(data: any) {
    req.get('/posts/list', data)
}

export function queryPost(data: any) {
    req.get('/posts/list', data)
}
