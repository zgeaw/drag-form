<template>
  <div>
    <div class="form-making">
      <fm-making-form
        ref="dragForm"
        :data="jsonList"
        preview
        generate-code
        generate-json
        clearable
        downLoadAction="/cim6d-file-storage-dev/noToken/file/commonFile/download/"
        action="/cim6d-file-storage-dev/noToken/file/commonFile/visitor/upload/drag-form"
      />
    </div>
    <fm-generate-form ref="generateFormRef" :data="jsonData" />
    <div style="text-align: center;">
      <el-button @click="init">初始化</el-button>
      <el-button @click="reset">复位</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      jsonList: [],
      jsonData: {
        "list": [
        {
          "type": "flag",
          "icon": "icon-check-box",
          "options": {
            "inline": true,
            "defaultValue": "1",
            "showLabel": true,
            "options": [
              {
                "value": "1",
                "label": "通过"
              },
              {
                "value": "2",
                "label": "驳回"
              }
            ],
            "required": true,
            "width": "",
            "remote": false,
            "remoteOptions": [],
            "props": {
              "value": "value",
              "label": "label"
            },
            "remoteFunc": "func_flag",
            "disabled": false,
            "halfLine": false
          },
          "name": "审核结果",
          "key": "1590657204000_85813",
          "model": "flag",
          "rules": [
            {
              "required": true,
              "message": "审核结果必须填写"
            }
          ],
          "sort": 1
        },
        {
          "type": "input",
          "icon": "icon-input",
          "options": {
            "width": "100%",
            "defaultValue": "",
            "required": true,
            "dataType": "string",
            "pattern": "",
            "placeholder": "请输入",
            "disabled": false,
            "halfLine": false,
            "remoteFunc": "func_1590657213000_3186"
          },
          "name": "单行文本",
          "key": "1590657213000_3186",
          "model": "input_1590657213000_3186",
          "rules": [
            {
              "type": "string",
              "message": "单行文本格式不正确"
            },
            {
              "required": true,
              "message": "单行文本必须填写"
            }
          ],
          "sort": 2
        },
        {
          "type": "textarea",
          "icon": "icon-diy-com-textarea",
          "options": {
            "width": "100%",
            "defaultValue": "",
            "required": false,
            "disabled": false,
            "pattern": "",
            "placeholder": "请输入",
            "halfLine": false,
            "remoteFunc": "func_1590657214000_40335"
          },
          "name": "多行文本",
          "key": "1590657214000_40335",
          "model": "textarea_1590657214000_40335",
          "rules": [],
          "sort": 3
        },
        {
          "id": "",
          "type": "imgupload",
          "icon": "icon-tupian",
          "options": {
            "defaultValue": [{ "name": "timg (4).jpg", "fileKey": "812c07d163e94fd2a3fb4cbaa0e4e994" }],
            "size": {
              "width": 100,
              "height": 100
            },
            "width": "",
            "tokenFunc": "funcGetToken",
            "token": "",
            "domain": "http://pfp81ptt6.bkt.clouddn.com/",
            "disabled": false,
            "required": true,
            "length": 3,
            "multiple": false,
            "isQiniu": false,
            "min": 0,
            "action": "/cim6d-file-storage-dev/noToken/file/commonFile/visitor/upload/drag-form",
            "downLoadAction": "/cim6d-file-storage-dev/noToken/file/commonFile/download/",
            "hidden": false,
            "halfLine": false,
            "remoteFunc": "func_1596109246000_10750"
          },
          "name": "图片",
          "key": "1596109246000_10750",
          "model": "imgupload_1596109246000_10750",
          "rules": [
            {
              "required": true,
              "message": "图片必须填写"
            }
          ],
          "sort": 1
        },
        {
          "id": "",
          "type": "fileupload",
          "icon": "icon-file",
          "options": {
            "defaultValue": [{ "name": "timg (4).jpg", "fileKey": "812c07d163e94fd2a3fb4cbaa0e4e994" }],
            "size": {},
            "tokenFunc": "funcGetToken",
            "token": "",
            "domain": "http://pfp81ptt6.bkt.clouddn.com/",
            "disabled": false,
            "required": true,
            "length": 3,
            "multiple": false,
            "isQiniu": false,
            "action": "/cim6d-file-storage-dev/noToken/file/commonFile/visitor/upload/drag-form",
            "downLoadAction": "/cim6d-file-storage-dev/noToken/file/commonFile/download/",
            "hidden": false,
            "halfLine": false,
            "remoteFunc": "func_1596110413000_54948"
          },
          "name": "文件",
          "key": "1596110413000_54948",
          "model": "fileupload_1596110413000_54948",
          "rules": [
            {
              "required": true,
              "message": "文件必须填写"
            }
          ],
          "sort": 1
        }
      ]
      }
    }
  },
  mounted () {  
    this.init()
  },
  methods: {
    // 初始化
    init () {
      // 设置表单数据
      this.$refs.generateFormRef.setData({
        input_1590657213000_3186: '5'
      })
    },
    // 复位
    reset () {
      this.$refs.generateFormRef.reset()
    }
  }
}
</script>
<style scoped>
.form-making{
  height: 500px;
}
</style>