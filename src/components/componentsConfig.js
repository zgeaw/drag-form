// 基础字段
import zhCN from '../lang/zh-CN'
export const basicComponents = [  
  {
    id: '',
    type: 'flag',
    icon: 'icon-check-box',
    options: {
      inline: true,
      defaultValue: '1',
      showLabel: true,
      options: [
        {
          value: '1',
          label: '通过'
        },
        {
          value: '2',
          label: '驳回'
        }
      ],
      required: true,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'input',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: true,
      dataType: 'string',
      pattern: '',
      placeholder: zhCN.fm.placeholder.input,
      disabled: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: zhCN.fm.placeholder.input,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'number',
    icon: 'icon-number',
    options: {
      width: '',
      required: true,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'radio',
    icon: 'icon-radio-active',
    options: {
      inline: true,
      defaultValue: '1',
      showLabel: true,
      options: [
        {
          value: '0',
          label: 'Option 1'
        },
        {
          value: '1',
          label: 'Option 2'
        },
        {
          value: '2',
          label: 'Option 3'
        }
      ],
      required: true,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'checkbox',
    icon: 'icon-check-box',
    options: {
      inline: true,
      defaultValue: [],
      showLabel: true,
      options: [
        {
          value: '0',
          label: 'Option 1'
        },
        {
          value: '1',
          label: 'Option 2'
        },
        {
          value: '2',
          label: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'time',
    icon: 'icon-time',
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: zhCN.fm.placeholder.select,
      startPlaceholder: zhCN.fm.placeholder.select,
      endPlaceholder: zhCN.fm.placeholder.select,
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'date',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: zhCN.fm.placeholder.select,
      startPlaceholder: zhCN.fm.placeholder.select,
      endPlaceholder: zhCN.fm.placeholder.select,
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'select',
    icon: 'icon-select',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: zhCN.fm.placeholder.select,
      required: true,
      showLabel: false,
      width: '',
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },{
          value: 'Option 3'
        }
      ],
      remote: false,
      filterable: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'slider',
    icon: 'icon-slider',
    options: {
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'imgupload',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'fileupload',
    icon: 'icon-file',
    options: {
      defaultValue: [],
      size: {
        // width: 0,
        // height: 0,
      },
      //width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      //min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  },
  {
    id: '',
    type: 'cascader',
    icon: 'icon-jilianxuanze',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      remote: true,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: '',      
      hidden: false, // 是否隐藏
      halfLine: false // 是否整行显示
    }
  }
]

// 高级字段
export const advanceComponents = [
  {
    id: '',
    type: 'blank',
    icon: 'icon-zidingyishuju',
    options: {
      defaultType: 'String',
      hidden: false // 是否隐藏
    }
  },
  {
    id: '',
    type: 'imgupload',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/',
      hidden: false // 是否隐藏
    }
  },
  {
    id: '',
    type: 'editor',
    icon: 'icon-fuwenbenkuang',
    options: {
      defaultValue: '',
      width: '',      
      hidden: false // 是否隐藏
    }
  },
  {
    id: '',
    type: 'cascader',
    icon: 'icon-jilianxuanze',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      remote: true,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: '',            
      hidden: false // 是否隐藏
    }
  }
]

// 字段布局
export const layoutComponents = [
  // {
  //   type: 'grid',
  //   icon: 'icon-grid-',
  //   columns: [
  //     {
  //       span: 12,
  //       list: []
  //     },
  //     {
  //       span: 12,
  //       list: []
  //     }
  //   ],
  //   options: {
  //     gutter: 0,
  //     justify: 'start',
  //     align: 'top'
  //   }
  // }
]
