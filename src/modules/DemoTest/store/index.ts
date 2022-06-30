import { defineStore } from 'pinia'

import { sleep } from '@/utils/request'
import {
  getDemoTestData,
  getTestList
} from '@/modules/DemoTest/api/index'

const useDemoTest = defineStore('DemoTest', {
  state: () => {
    return {

    }
  },
  actions: {
    // test
    async getTestList(data: any) {
      const result = await getTestList(data)
      return this.filterResponse(result)
    }
  }
})

export default useDemoTest