export const getIdFromUrl=(url:string):string=>{
    return url.split('/').pop() || ''

}
