import req from '@/util/request';

export function login(data: any) {
    req.get('/login', data);
}

export function queryPost(data: any) {
    req.get('/logout', data);
}
