import request from '@/utils/request'
// test
export function getTestList(params: any) {
  return request({
    url: '',
    method: 'get',
    params
  })
}

export function getDemoTestData (params) {
  // return request({
  //   url: '/api/demo_data',
  //   method: 'get',
  //   params
  // })

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          a: 1,
          b: 2
        }
      })
    }, 2000)
  })

}
