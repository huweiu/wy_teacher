<template>
  <div>
    <div class="content">
        <div class="allClear" @click.stop="allClear">清空</div>
        <div class="allChoice" @click.stop="allChoice">全选</div>
    </div>
    <div class="pageHeight">      
        <div class="timeChoice" v-for="(item,index) in timeArr" :key="index" @click="timeChoice(index)" :class="{'selected':item.status}">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          timeArr:[
            {time:"00:00",status:false},
            {time:"00:30",status:false},
            {time:"01:00",status:false},

            {time:"01:30",status:false},
            {time:"02:00",status:false},
            {time:"02:30",status:false},

            {time:"03:00",status:false},
            {time:"03:30",status:false},
            {time:"04:00",status:false},

            {time:"04:30",status:false},
            {time:"05:00",status:false},
            {time:"05:30",status:false},

            {time:"06:00",status:false},
            {time:"06:30",status:false},
            {time:"07:00",status:false},

            {time:"07:30",status:false},
            {time:"08:00",status:false},
            {time:"08:30",status:false},

            {time:"09:00",status:false},
            {time:"09:30",status:false},
            {time:"10:00",status:false},

            {time:"10:30",status:false},
            {time:"11:00",status:false},
            {time:"11:30",status:false},

            {time:"12:00",status:false},
            {time:"12:30",status:false},
            {time:"13:00",status:false},

            {time:"13:30",status:false},
            {time:"14:00",status:false},
            {time:"14:30",status:false},

            {time:"15:00",status:false},
            {time:"15:30",status:false},
            {time:"16:00",status:false},

            {time:"16:30",status:false},
            {time:"17:00",status:false},
            {time:"17:30",status:false},

            {time:"18:00",status:false},
            {time:"18:30",status:false},
            {time:"19:00",status:false},

            {time:"19:30",status:false},
            {time:"20:00",status:false},
            {time:"20:30",status:false},

            {time:"21:00",status:false},
            {time:"21:30",status:false},
            {time:"22:00",status:false},

            {time:"22:30",status:false},
            {time:"23:00",status:false},
            {time:"23:30",status:false},

            {time:"24:00",status:false},
          ],

          indexArr:[],
          index:0
      };
    },

    mounted() {

    },

    watch:{
        // indexArr(){
        //     console.log("111111111111111111111")
        //     let ndate = [...this.timeArr]
        //     setTimeout(()=>{
        //         console.log("22222222222222")
        //         if( this.indexArr.length === 1 ){
        //             console.log("3333333333333333333")
        //             ndate[this.index].status = false
        //             this.indexArr = []
        //         }
        //     },5000)            
        // }
    },

    methods: {
        timeChoice(index){
            console.log("index === ", index)
            this.index = index
            let ndate = [...this.timeArr]
            if(ndate[index].status){
                ndate[index].status = false
                let idx = this.indexArr.indexOf(index)
                if(idx>-1){
                    this.indexArr.splice(idx,1)
                }                
            }else{
                ndate[index].status = true
                this.indexArr.push(index)
            }

            if(this.indexArr.length === 1){      
                // setTimeout(()=>{
                //     console.log("22222222222222")
                //     if( this.indexArr.length === 1 ){
                //         console.log("3333333333333333333")
                //         ndate[index].status = false
                //         this.indexArr = []
                //     }
                // },3000)           

                if( ndate[index-1].status ){
                    this.indexArr.push(index-1)
                }

                if( ndate[index+1].status ){
                    this.indexArr.push(index+1)
                }

            }

            if(this.indexArr.length === 2){
                this.indexArr.sort((a,b)=>{
                    return a-b
                })
                for(let i=this.indexArr[0]; i<this.indexArr[1]; i++){
                    ndate[i].status = true
                }
                this.indexArr = []
                this.timeArr = ndate
            }
                        
            console.log("idnexArr === ", this.indexArr)
        },

        allClear(){
            let ndate = [...this.timeArr]
            for(let i=0;i<ndate.length;i++){
                ndate[i].status = false
            }
            this.timeArr = ndate
        },

        allChoice(){
            let ndate = [...this.timeArr]
            for(let i=0;i<ndate.length;i++){
                ndate[i].status = true
            }
            this.timeArr = ndate
        }
    },
  }
</script>

<style scoped>
.pageHeight{
  width: 260px;
  height: 330px;
  margin: 30px auto;
  border: 1px solid #cccccc;
  display: flex;
  flex-flow:  wrap;
}

.timeChoice{
    width: 50px;
    height: 30px;
    font-size: 13px;
    display: flex;    
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
}

.selected{
    background-color: #409EFF;
}

.timeChoice:hover{
    cursor: pointer;
    background-color: gray;
}

.content{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content .allClear{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    margin-right: 20px;
}

.content .allChoice{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
}

.content .allClear:hover{
    cursor: pointer;
    background-color: gray;
}

.content .allChoice:hover{
    cursor: pointer;
    background-color: gray;
}
</style>