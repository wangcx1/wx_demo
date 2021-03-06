const app = getApp();
import store from './utils/index'
App(store.createApp({
  globalData: {
    datas: {
      "seller": {
        "id": 1234,
        "name": "粥品香坊",
        "description": "蜂鸟专送",
        "deliveryTime": 38,
        "score": 4.5,
        "seviceScore": 4.1,
        "foodScore": 4.3,
        "rankRate": 69.2,
        "minPrice": 26,
        "deliveryPrice": 4,
        "ratingCount": 24,
        "sellCount": 90,
        "bulletin": "粥品香坊其烹饪的秘方源于中国的千年古方，在融合了现代的烹饪大师屈浩先生研发,粥品香坊其烹饪的秘方源于中国的千年古方，在融合了现代的烹饪大师屈浩先生研发粥品香坊其烹饪的秘方源于中国的千年古方，在融合了现代的烹饪大师屈浩先生研发",
        "supports": [
          {
            "type": 0,
            "description": "在线支付满28减5"
          },
          {
            "type": 1,
            "description": "果汁全场8折"
          },
          {
            "type": 2,
            "description": "单人精彩套餐"
          },
          {
            "type": 3,
            "description": "该商家支持发票，请下单写好发票抬头"
          }
        ],
        "avatar": "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
        "pics": [
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85",
          "http://fuss10.elemecdn.com/8/1f/74c30642b0f08b937d40e756475d0jpeg.jpeg?imageMogr2/thumbnail/95x95/format/webp/quality/85"
        ],
        "infos": [
          "该商家支持发票，请下单写好发票抬头",
          "品类：其他菜系，包子粥店",
          "上海市闵行区浦江科技广场3号楼",
          "营业时间：10:00-22:00"
        ]
      },
      "goods": [
        {
          "name": "热销榜",
          "type": 0,
          "foods": [
            {
              "name": "皮蛋瘦肉粥",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/5/ab/d95d4583adedbb7852a05f66e18aajpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": " ",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 1,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 1,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "皮蛋瘦肉粥",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/4/df/202d923219cec07d6fa8bc9783801jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 1,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            }
          ]
        },
        {
          "name": "单人精彩套餐",
          "type": 1,
          "foods": [
            {
              "name": "皮蛋瘦肉粥",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/a/9b/61064b9851be96408a1b056b5dd03jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            }
          ]
        },
        {
          "name": "精选热菜",
          "type": 2,
          "foods": [
            {
              "name": "皮蛋瘦肉粥",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/5/bc/783dd6407e203de7ccf654876f876jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            },
            {
              "name": "大盘鸡",
              "price": 14,
              "oldPrice": 45,
              "description": "咸粥",
              "sellCount": 229,
              "rating": 100,
              "icon": "http://fuss10.elemecdn.com/d/52/c4a97533fc66a0db4e07fcd819a41jpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85",
              "info": "一碗皮蛋瘦肉粥是我的不二之选",
              "ratings": [
                {
                  "username": "11111",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "22222",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                },
                {
                  "username": "3333",
                  "rateTime": 1474006780,
                  "rateType": 0,
                  "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
                  "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85"
                }
              ]
            }
          ]
        }
      ],
      "ratings": [
        {
          "username": "11111",
          "rateTime": 1474006780,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 35,
          "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
          "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85",
          "recommend": [
            "南瓜粥",
            "皮蛋瘦肉粥",
            "扁豆焖面",
            "娃娃菜炖豆腐",
            "牛肉馅饼"
          ]
        },
        {
          "username": "11111",
          "rateTime": 1474006780,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 35,
          "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
          "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85",
          "recommend": [
            "南瓜粥",
            "皮蛋瘦肉粥",
            "扁豆焖面",
            "娃娃菜炖豆腐",
            "牛肉馅饼"
          ]
        },
        {
          "username": "11111",
          "rateTime": 1474006780,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 35,
          "text": "不错粥很好喝，我经常吃这一家，非常赞，以后也会常来吃。",
          "avatar": "http://fuss10.elemecdn.com/f/01/0b3f3a2496fa0919b2fc4497414fdjpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/85",
          "recommend": [
            "南瓜粥",
            "皮蛋瘦肉粥",
            "扁豆焖面",
            "娃娃菜炖豆腐",
            "牛肉馅饼"
          ]
        }
      ]
    },
    count: 0

  },
  onLaunch: function () {

  }
}))
