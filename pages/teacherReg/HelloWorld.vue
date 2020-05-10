<template>
  <div class="hello" style="margin-top:80px;margin-left:50px;">
    <!-- <el-table ref="multipleTable" border :data="tableData" :show-header="isShowHeader" style="width: 80%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu1.line,scope.row.emu1.id)" :type="scope.row.emu1.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu1.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu2.line,scope.row.emu2.id)" :type="scope.row.emu2.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu2.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu3.line,scope.row.emu3.id)" :type="scope.row.emu3.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu3.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu4.line,scope.row.emu4.id)" :type="scope.row.emu4.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu4.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu5.line,scope.row.emu5.id)" :type="scope.row.emu5.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu5.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu6.line,scope.row.emu6.id)" :type="scope.row.emu6.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu6.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu7.line,scope.row.emu7.id)" :type="scope.row.emu7.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu7.data}}</el-button></template>
    </el-table-column>
    <el-table-column label="" width="120">
      <template slot-scope="scope"><el-button @click="choiceOne(scope.row.emu8.line,scope.row.emu8.id)" :type="scope.row.emu8.isChoice?'primary':''" style="width:100%;height:100%">{{scope.row.emu8.data}}</el-button></template>
    </el-table-column> -->

    <div v-for="(items,index) in tableData" :key="index" style="marginBottom:5px;">
      <el-checkbox v-model="isCheckBoxArr[index].statusObj['isCheckBox'+index]" @change="isChoiceIndex(index,isCheckBoxArr[index])"></el-checkbox>
      <el-button v-for="(item,index) in items" :key="index" @click="choiceOne(item.line,item.id)" :type="item.isChoice?'primary':''" style="width:120px;">{{item.data}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
        tableData: [
        {
          emu1:{id:1,line:1,data:0.1,isChoice:false},
          emu2:{id:2,line:1,data:0.2,isChoice:false},
          emu3:{id:3,line:1,data:0.3,isChoice:false},
          emu4:{id:4,line:1,data:0.4,isChoice:false},
          emu5:{id:5,line:1,data:0.5,isChoice:false},
          emu6:{id:6,line:1,data:0.6,isChoice:false},
          emu7:{id:7,line:1,data:0.7,isChoice:false},
          emu8:{id:8,line:1,data:0.8,isChoice:false}
        }, 
        {
          emu1:{id:1,line:2,data:0.9,isChoice:false},
          emu2:{id:2,line:2,data:1.0,isChoice:false},
          emu3:{id:3,line:2,data:1.1,isChoice:false},
          emu4:{id:4,line:2,data:1.2,isChoice:false},
          emu5:{id:5,line:2,data:1.3,isChoice:false},
          emu6:{id:6,line:2,data:1.4,isChoice:false},
          emu7:{id:7,line:2,data:1.5,isChoice:false},
          emu8:{id:8,line:2,data:1.6,isChoice:false}
        }
        ],
        multipleSelection: [],
        isShowHeader:false,
        isCheckBoxArr:[],
        descArr:[],
        lineIndex:0,
        lineStatus:false,
        num:0
    }
  },

  created(){
    this.init()
  },


    methods: {
      init(){
        let statusObj = {}
        for(let i=0;i<this.tableData.length;i++){     
          statusObj["isCheckBox" + i] = false
          this.isCheckBoxArr.push({
            statusObj
          })
        }
      },

      isChoiceIndex(index,status){
        this.lineIndex = index
        this.lineStatus = status
        if(status.statusObj['isCheckBox'+index]){
          for(let i=0;i<this.tableData.length;i++){
            if(index+1 === this.tableData[i].emu1.line){
              this.tableData[i].emu1.isChoice = true
              this.tableData[i].emu2.isChoice = true
              this.tableData[i].emu3.isChoice = true
              this.tableData[i].emu4.isChoice = true
              this.tableData[i].emu5.isChoice = true
              this.tableData[i].emu6.isChoice = true
              this.tableData[i].emu7.isChoice = true
              this.tableData[i].emu8.isChoice = true
            }
          }
        }else{
          for(let i=0;i<this.tableData.length;i++){
            if(index+1 === this.tableData[i].emu1.line){
              this.tableData[i].emu1.isChoice = false
              this.tableData[i].emu2.isChoice = false
              this.tableData[i].emu3.isChoice = false
              this.tableData[i].emu4.isChoice = false
              this.tableData[i].emu5.isChoice = false
              this.tableData[i].emu6.isChoice = false
              this.tableData[i].emu7.isChoice = false
              this.tableData[i].emu8.isChoice = false
            }
          }
        }
      },

      choiceOne(line,id){
        for(let i=0;i<this.tableData.length;i++){
          
          if(this.tableData[i].emu1.line === line && this.tableData[i].emu1.id === id){
            this.tableData[i].emu1.isChoice = !this.tableData[i].emu1.isChoice
            if(!this.tableData[i].emu1.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu2.line === line && this.tableData[i].emu2.id === id){
            this.tableData[i].emu2.isChoice = !this.tableData[i].emu2.isChoice
            if(!this.tableData[i].emu2.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu3.line === line && this.tableData[i].emu3.id === id){
            this.tableData[i].emu3.isChoice = !this.tableData[i].emu3.isChoice
            if(!this.tableData[i].emu3.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu4.line === line && this.tableData[i].emu4.id === id){
            this.tableData[i].emu4.isChoice = !this.tableData[i].emu4.isChoice
            if(!this.tableData[i].emu4.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu5.line === line && this.tableData[i].emu5.id === id){
            this.tableData[i].emu5.isChoice = !this.tableData[i].emu5.isChoice
            if(!this.tableData[i].emu5.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu6.line === line && this.tableData[i].emu6.id === id){
            this.tableData[i].emu6.isChoice = !this.tableData[i].emu6.isChoice
            if(!this.tableData[i].emu6.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu7.line === line && this.tableData[i].emu7.id === id){
            this.tableData[i].emu7.isChoice = !this.tableData[i].emu7.isChoice
            if(!this.tableData[i].emu7.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }

          if(this.tableData[i].emu8.line === line && this.tableData[i].emu8.id === id){
            this.tableData[i].emu8.isChoice = !this.tableData[i].emu8.isChoice
            if(!this.tableData[i].emu8.isChoice){
              this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = false
            }
          }
        }
          
        let data = this.tableData[line-1]
          if(data.emu1.isChoice && data.emu2.isChoice && data.emu3.isChoice && data.emu4.isChoice && data.emu5.isChoice && data.emu6.isChoice && data.emu7.isChoice && data.emu8.isChoice){
            
            this.isCheckBoxArr[line-1].statusObj['isCheckBox'+(line-1)] = true
          }
        
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
