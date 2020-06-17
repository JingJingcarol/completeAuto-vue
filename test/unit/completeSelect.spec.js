/* eslint-disable no-undef */
import Vue from "vue";
import { shallowMount } from '@vue/test-utils'
import CompleteSelect from '@/myplugin/completeSelect.vue'

Vue.mixin({
    methods: {
        $t: () => ''
    }
})
const factory = (props = {},opt = {}) => {
    return shallowMount(CompleteSelect, {
        propsData:{
            data:[
                {id:'1',name:'a张三'},
                {id:'2',name:'a李四'},
                {id:'3',name:'a王五'},
                {id:'4',name:'a赵六'},
                {id:'5',name:'a李雷'},
            ],
            ...props
        },
        ...opt
       
    })
}

describe('CompleteSelect 功能渲染', () => {
    it('是否正确渲染,无默认值', () => {
        // 渲染这个组件
        const wrapper = factory()
        //显示input
        expect(wrapper.find('input').exists()).toBeTruthy();
        //不显示自动列表
        expect(wrapper.find('.selectList>ul').exists()).toBeFalsy();
    })
    it('是否正确渲染,有默认值', () => {
        // 渲染这个组件
        const wrapper = factory({
            value:'auto'
        })
        //显示input的value是auto
        // console.log(wrapper.find('input').value)
        expect(wrapper.vm.inputvalue).toEqual('auto');
        //不显示自动列表
        expect(wrapper.find('.selectList>ul').exists()).toBeFalsy();
    })
    it('输入input，自动搜索', (done) => {
        // 渲染这个组件
        const wrapper = factory({
            // value:''
        })
        //输入 张三
        wrapper.vm.inputvalue = '张三';
        wrapper.vm.$nextTick(() => {
            // console.log(wrapper.vm.realList)
            expect(wrapper.vm.realList).toEqual([{id:'1',name:'a张三'}]);
            //显示自动列表,且只有一项符合
            expect(wrapper.find('.selectList>ul').exists()).toBeTruthy();
            expect(wrapper.findAll('.selectList li').length).toEqual(1);
            done()
        })
    })
    it('输入input，自动搜索,无符合结果', (done) => {
        // 渲染这个组件
        const wrapper = factory();
        //输入 张三
        wrapper.vm.inputvalue = '123456';
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.realList).toEqual([]);
            //显示自动列表,显示空提示
            expect(wrapper.find('.selectList>ul').exists()).toBeTruthy();
            expect(wrapper.find('.selectList .empty').exists()).toBeTruthy();
            done()
        })
    })
    it('输入input，自动搜索，点选列表，自动填充', (done) => {
        // 渲染这个组件
        const wrapper = factory();
        //输入 张三
        wrapper.vm.inputvalue = '张三';
        wrapper.vm.$nextTick(() => {
            wrapper.find('.selectList li').trigger('click');
            wrapper.vm.$nextTick(() => {
                expect(wrapper.vm.inputvalue).toEqual('a张三');
                //关闭自动列表
                expect(wrapper.find('.selectList>ul').exists()).toBeFalsy();
                done()
            })
        })
    })
    it('输入input，自动搜索，输入回车确认', (done) => {
        // 渲染这个组件
        const wrapper = factory();
        //输入 张三
        wrapper.vm.inputvalue = '张三';
        wrapper.vm.$nextTick(() => {
            
            wrapper.find('input').trigger('keyup')
            // wrapper.vm.$options.methods.onkeyup({which:13})
            wrapper.setData({
                isSelected:0
            })
            wrapper.vm.$nextTick(() => {
                expect(wrapper.vm.inputvalue).toEqual('张三');
                expect(wrapper.vm.isSelected).toEqual(0);
                //关闭自动列表
                expect(wrapper.find('.selectList>ul').exists()).toBeFalsy();
                done()
            })
        })
    })
})
describe('CompleteSelect 插槽', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = factory({},{
        slots: {
            item: `<div class="slot-list"></div>`,
            empty:`<div class="slot-empty"></div>`
        }
      });
    });
  
    afterEach(() => {
      wrapper.destroy()
    });
    it('显示列表插槽', (done) => {
        //输入 张三
        // console.log(wrapper.vm.$slots)
        wrapper.vm.inputvalue = '张三';
        wrapper.vm.$nextTick(() => {
            expect(wrapper.find('.selectList .slot-list').exists()).toBeTruthy()
            done()
        })
    })
    it('显示空插槽', (done) => {
        //输入 123456
        wrapper.vm.inputvalue = '123456';
        wrapper.vm.$nextTick(() => {
            expect(wrapper.find('.selectList .slot-empty').exists()).toBeTruthy()
            done()
        })
    })
})