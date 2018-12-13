<template>
  <div class="fluid container col-12" >
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">教学活动设计</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable">是否拖拽</label>
          <button type="button" class="btn btn-default" @click="orderList" style="padding:2px 5px">还原排序</button>
          <button type="button" class="btn btn-primary"  style="padding:2px 5px" @click="send">点击确定</button>
        </div>

      </div>
    </div>
    <div class="col-12">
      <div class="col-6" style="float: left">
        <p style="margin-bottom: 0px"><i class="icon-xuanze2" style="color: #3499FE"></i>教学环节选择</p>
        <select value="教学类型选择" v-model="studyKind" style="padding: 3px 7px;border-radius: 6px;font-size: 14px"  @change="kindSelect(studyKind)" >
          <option value="" disabled>教学类型</option>
          <option value="read">阅读</option>
          <option value="English">英语</option>
        </select>
        <div v-show="kindOne"  style="background-color: #DBDBDB;height: auto;padding-bottom: 20px;padding-top: 20px;padding-left:0px;padding-right: 0px ;margin-top: 3px">
          <draggable class="list-group" element="ul" v-model="read" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <li class="list-group-item" v-for="element in read" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <!--<span class="badge">{{element.order}}</span>-->
              </li>
            </transition-group>
          </draggable>
        </div>
        <div v-show="kindTwo" style="background-color: #DBDBDB;height: auto;padding-bottom: 20px;padding-top: 20px;padding-left:0px;padding-right: 0px ;margin-top: 3px">
          <draggable class="list-group" element="ul" v-model="english" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <li class="list-group-item" v-for="element in english" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <!--<span class="badge">{{element.order}}</span>-->
              </li>
            </transition-group>
          </draggable>
        </div>

      </div>

      <div class="col-6" style="float: right;">
        <p><i class="icon-xuanze1" style="color: #3499FE"></i>拖放区域</p>
        <div style="background-color: yellow;height: auto;padding-bottom: 20px;padding-top: 20px;">
          <draggable element="span" v-model="list2" :options="dragOptions" :move="onMove">
            <transition-group name="no" class="list-group" tag="ul">
              <li class="list-group-item" v-for="element in list2" :key="element.order">
                <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                {{element.name}}
                <!--<span class="badge">{{element.order}}</span>-->
              </li>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%">
      <span>请先设计教学流程</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--<div class="list-group col-md-3">-->
      <!--<pre>{{listString}}</pre>-->
    <!--</div>-->
    <!--<div class="list-group col-md-3">-->
      <!--<pre>{{list2String}}</pre>-->
    <!--</div>-->
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const readMessage = [
  '引导阅读',
  '详细阅读',
  '强化阶段'
]
const EnglishMessage = [
  '唱歌',
  '复习',
  '问题交互',
  '单词讲解',
  '游戏环节',
  '单词跟读'
]
export default {
  name: 'teachingProcess',
  components: {
    // 调用组件
    draggable
  },
  data () {
    return {
      read: readMessage.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      english: EnglishMessage.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      dialogVisible: false,
      studyKind: '',
      kindOne: false,
      kindTwo: false
    }
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    send: function () {
      if (this.list2.length === 0) {
        console.log('123')
        this.dialogVisible = true
      }
    },
    kindSelect (val) {
      console.log(val)
      if (val === 'read') {
        this.kindOne = true
        this.kindTwo = false
      } else if (val === 'English') {
        this.kindOne = false
        this.kindTwo = true
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString () {
      return JSON.stringify(this.list, null, 2)
    },
    list2String () {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style scoped>
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
  .list-group-item {
    cursor: move;
  }
  .list-group-item i {
    cursor: pointer;
  }
</style>
