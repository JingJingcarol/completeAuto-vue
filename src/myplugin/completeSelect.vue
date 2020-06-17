<template>
    <div class="completeSelect" :class="{'dark-theme':theme == 'dark'}">
        <input type="text" :placeholder="$t('common.search placeholder')" v-model="inputvalue" @keyup="onkeyup($event)">
        <div class="selectList" v-if="inputvalue">
            <ul v-if="canselect">
                <li v-if=" realList.length == 0" class="empty">
                    <slot name="empty" >
                        {{$t('common.empty')}}
                    </slot>
                </li>
                <li v-for="item in realList" :key="item.id" @click="onSelect(item)">
                    <slot name="item" :item="item" >
                       <div v-html="getHighLight(item.name)"> </div>
                    </slot>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script lang='ts'>
    import { Component, Vue,Prop, Watch } from 'vue-property-decorator';
    
    interface list {
        id:string,
        name:string
    }
    enum selected {
        start,
        select,
        end,
    }
    @Component({
        // filters:{
        //     getHighLight(name,inputvalue){
        //         let panter = new RegExp(inputvalue, 'g');
        //         return name.replace(panter, '<b style="color: #0479e6;">' + inputvalue + '</b>')
        //     }
        // }
    })
    export default class CompleteSelect extends Vue {
        @Prop() data:list[];
        @Prop() theme:string;
        @Prop() lang:'zh' | 'en';
        @Prop({default:''}) value:string;

        inputvalue = this.value;
        isSelected:selected = selected.start;

        @Watch('inputvalue') input(value:string):void{
            if(this.isSelected == selected.end){
                this.isSelected = selected.start
            }else if(this.isSelected == selected.start){
                this.isSelected = selected.select
            }
            // this.value = value;
            this.$emit('input',value)
        }
        //todo 大量数据时，虚拟滚动
        get realList():list[] {
            return this.inputvalue 
                && this.data.slice(0).filter(d => d.name.indexOf(this.inputvalue) != -1)
        }
        get canselect():boolean {
            return this.isSelected == selected.select
        }

        
        created():void {
            if(this.lang && this.lang == 'en'){
                this['$i18n'].locale = 'en'
            }
        }
        onSelect(item:list):void{
            this.inputvalue = item.name;
            this.isSelected = selected.end;
        }
        onkeyup(e:KeyboardEvent):void{
            if(e.which == 13){
                this.isSelected = selected.start;
            }
        }
        getHighLight(name:string):string{
            let panter = new RegExp(this.inputvalue, 'g');
            return name.replace(panter, '<b style="color: #0479e6;">' + this.inputvalue + '</b>')
        }
    }
</script>
<style scoped>
.completeSelect{
    position: relative;
    text-align: left;
}
.completeSelect *{
    box-sizing: border-box;
    margin: 0;
}
.completeSelect input{
    padding: 0.5rem 0.8rem;
    border: 1px solid #bbb;
    border-radius: 2px;
    font-size: 1rem;
    width: 100%;
    background: transparent;
    outline: none;
}
.completeSelect .selectList{
    position: absolute;
    box-shadow: 0 0 8px #ddd;
    /* padding: 0.5rem; */
    top: 2rem;
    background: #fff;
    width: 100%;
}
.completeSelect .selectList li{
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
    color: #2c3e50;
}
.completeSelect .selectList li:hover{
    background: #2fb2ff;
    color:#fff
}

.completeSelect .selectList li:last-child{
    border-bottom:0
}
.completeSelect.dark-theme input{
    color: #fff;
}

</style>
    
