import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'div': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[v-cloak]': {
    'display': 'none'
  },
  'lock-header img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lock-content': {
    'width': [{ 'unit': '%H', 'value': 0.6229 }],
    'margin': [{ 'unit': 'px', 'value': 28 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 110 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'lock-content lock-tabs': {
    'display': 'flex',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff6e82' }]
  },
  'lock-content lock-tab': {
    'width': [{ 'unit': '%H', 'value': 0.1202 }],
    'height': [{ 'unit': 'vh', 'value': 5 }],
    'lineHeight': [{ 'unit': 'vh', 'value': 5 }],
    'color': '#ff6e82',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'cursor': 'pointer',
    'textAlign': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff6e82' }],
    'borderTopLeftRadius': '8px',
    'borderTopRightRadius': '8px',
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'lock-content lock-tabactive': {
    'color': '#fff',
    'backgroundColor': '#ff6e82'
  },
  'lock-content lock-their': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'paddingTop': [{ 'unit': 'px', 'value': 28 }]
  },
  'lock-their their-item': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.32333300000000004 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.015 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  'item-img-content img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'item-img-content p': {
    'color': '#454545',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    'minHeight': [{ 'unit': 'px', 'value': 100 }],
    'maxHeight': [{ 'unit': 'px', 'value': 100 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '4',
    'WebkitBoxOrient': 'vertical'
  },
  'item-auth p': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'right',
    'color': '#ff6e82'
  },
  'item-auth p:first-child': {
    'fontWeight': 'bold'
  },
  'lock-their their-item:nth-of-type(3n)': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'their-loading': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'height': [{ 'unit': 'vw', 'value': 24 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'their-loadingsearch-loading': {
    'height': [{ 'unit': 'vw', 'value': 5 }]
  },
  'their-items': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden'
  },
  'lock-btn': {
    'width': [{ 'unit': '%H', 'value': 0.18309999999999998 }],
    'margin': [{ 'unit': 'px', 'value': 110 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'height': [{ 'unit': 'vw', 'value': 3.4 }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'color': '#fff',
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff6e82' }],
    'backgroundColor': '#ff6e82',
    'borderRadius': '8px',
    'lineHeight': [{ 'unit': 'vw', 'value': 3.4 }]
  },
  'lock-creat': {
    'padding': [{ 'unit': '%V', 'value': 0.049 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.049 }, { 'unit': 'px', 'value': 0 }],
    // opacity: 0;    
    transition: all .5s;
    transform: translateY(60px);
  },
  'lock-break': {
    'padding': [{ 'unit': '%V', 'value': 0.049 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.049 }, { 'unit': 'px', 'value': 0 }],
    // opacity: 0;    
    transition: all .5s;
    transform: translateY(60px);
  },
  'lock-input-title': {
    'fontSize': [{ 'unit': 'px', 'value': 23 }],
    'color': '#F37689',
    'fontWeight': 'bold'
  },
  'lock-input': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff6e82',
    'width': [{ 'unit': '%H', 'value': 0.46399999999999997 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 41.5 }],
    'borderRadius': '6px',
    'paddingLeft': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff6e82' }]
  },
  'lock-input:focus': {
    'outline': 'none'
  },
  'lock-input:-moz-placeholder': {
    // Mozilla Firefox 4 to 18
    'color': '#F37689',
    'opacity': '1'
  },
  'lock-input::-moz-placeholder': {
    // Mozilla Firefox 19+
    'color': '#F37689',
    'opacity': '1'
  },
  'lock-input:-ms-input-placeholder': {
    'color': '#F37689',
    'opacity': '1'
  },
  'lock-input::-webkit-input-placeholder': {
    'color': '#F37689',
    'opacity': '1'
  },
  'lock-no-web-wallet': {
    'height': [{ 'unit': 'vw', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'vw', 'value': 24 }],
    'color': '#ff6e82'
  },
  'a': {
    'textDecoration': 'none'
  },
  'their-no-items': {
    'height': [{ 'unit': 'vw', 'value': 24 }],
    'lineHeight': [{ 'unit': 'vw', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#ff6e82',
    'textAlign': 'center'
  },
  'their-no-items span': {
    'cursor': 'pointer',
    'color': '#ef81e5'
  },
  'transaction-hash': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 68 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#ff6e82'
  },
  'transaction-hash span': {
    'paddingBottom': [{ 'unit': 'px', 'value': 2 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }]
  },
  'transaction-tip': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#ff6e82',
    'paddingTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'lock-search': {
    'minHeight': [{ 'unit': 'vw', 'value': 24 }]
  },
  'lock-address': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'marginTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'lock-address span': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ff6e82'
  },
  'lock-address input': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff6e82' }],
    'borderRadius': '0',
    'width': [{ 'unit': '%H', 'value': 0.37 }]
  },
  'lock-info info-item': {
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#FF6E83',
    'width': [{ 'unit': '%H', 'value': 0.46 }],
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'info-item span': {
    'display': 'block',
    'minWidth': [{ 'unit': 'px', 'value': 84 }]
  },
  'lock-footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 83 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'backgroundColor': '#0c0517'
  },
  'lock-footer p': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'textAlign': 'center'
  },
  // 可以设置不同的进入和离开动画
  // 设置持续时间和动画函数
  'create-enter-active': {
    'transition': 'all .5s'
  },
  'create-leave-active': {
    'transition': 'all 0s'
  },
  'create-enter': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'create-leave-to': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'break-enter-active': {
    'transition': 'all .5s'
  },
  'break-leave-active': {
    'transition': 'all 0s'
  },
  'break-enter': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'break-leave-to': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'search-enter-active': {
    'transition': 'all .5s'
  },
  'search-leave-active': {
    'transition': 'all 0s'
  },
  'search-enter': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'search-leave-to': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'their-enter-active': {
    'transition': 'all .5s'
  },
  'their-leave-active': {
    'transition': 'all 0s'
  },
  'their-enter': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  },
  'their-leave-to': {
    'opacity': '0',
    'transform': 'translateY(60px)'
  }
});
