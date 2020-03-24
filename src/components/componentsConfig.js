// 基础字段
import zhCN from '../lang/zh-CN'
export const basicComponents = [
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: zhCN.fm.placeholder.input,
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,
      halfLine: false // 是否整行显示
    }
  },
  {
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  },
  {
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
      halfLine: false // 是否整行显示
    }
  }
]

// 高级字段
export const advanceComponents = [
  {
    type: 'blank',
    icon: 'icon-zidingyishuju',
    options: {
      defaultType: 'String'
    }
  },
  {
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
      action: 'https://jsonplaceholder.typicode.com/photos/'
    }
  },
  {
    type: 'editor',
    icon: 'icon-fuwenbenkuang',
    options: {
      defaultValue: '',
      width: ''
    }
  },
  {
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
      remoteFunc: ''
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
