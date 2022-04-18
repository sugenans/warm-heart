Page({

    /**
     * 页面的初始数据
     */
    data: {
        active_list: [
            // 活动精选
            {
                image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMDk0MzQ0OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk2NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEyMy41Mkw1ODkuNzYgMjg4QTIwOS4yOCAyMDkuMjggMCAwIDAgNzM2IDM5OC40bDE3Ny45MiAyNy4yLTEzMi4xNiAxMzUuMDRBMjE3LjI4IDIxNy4yOCAwIDAgMCA3MjggNzM2bDMyIDE4Ny44NC0xNTQuMjQtODUuMTJhMjA1LjQ0IDIwNS40NCAwIDAgMC0xODQuOTYgMGwtMTU1LjUyIDgzLjUyIDMyLTE4Ny44NGEyMTcuMjggMjE3LjI4IDAgMCAwLTU1LjA0LTE3My43NkwxMDguOCA0MjUuNmwxNzkuMi0yNy4yQTIwOS4yOCAyMDkuMjggMCAwIDAgNDM0LjI0IDI4OEw1MTIgMTIzLjUyTTUxMiAwYy0xMC41NiAwLTIxLjEyIDguMzItMjguOCAyNS4yOGwtMTEwLjQgMjM0LjU2YTE0My4wNCAxNDMuMDQgMCAwIDEtOTYgNzEuNjhsLTI0MS45MiAzNi44Yy0zNy4xMiA1Ljc2LTQ1Ljc2IDMyLTE5Ljg0IDU4Ljg4TDE5MiA2MDhhMTUxLjM2IDE1MS4zNiAwIDAgMSAzNi40OCAxMTUuNTJMMTg2LjU2IDk4Mi40Yy00LjE2IDI2LjI0IDUuNzYgNDEuNiAyMy42OCA0MS42YTUzLjEyIDUzLjEyIDAgMCAwIDI0Ljk2LTcuNjhMNDUyLjQ4IDg5NmExMzcuOTIgMTM3LjkyIDAgMCAxIDExOS4wNCAwbDIxNy4yOCAxMTkuNjhhNTMuMTIgNTMuMTIgMCAwIDAgMjQuOTYgNy42OGMxNy45MiAwIDI3Ljg0LTE1LjM2IDIzLjY4LTQxLjZsLTQyLjI0LTI1OC44OEExNTEuMzYgMTUxLjM2IDAgMCAxIDgzMiA2MDhsMTc3LjI4LTE4MS4xMmMyNi4yNC0yNi41NiAxNy4yOC01My4xMi0xOS44NC01OC44OGwtMjQxLjYtMzYuOGExNDMuMDQgMTQzLjA0IDAgMCAxLTk2LTcxLjY4TDU0MC44IDI1LjI4QzUzMy4xMiA4LjMyIDUyMi41NiAwIDUxMiAweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iOTY1MyI+PC9wYXRoPjwvc3ZnPg==",
                name: "活动精选",
                ad: "#周四鲜果大折扣#全场鲜果优惠",
                time: "2022.11.15",
                background_color: "rgb(252, 0, 0)",
            },
            //客服助手
            {
                image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMDk1NzIwODkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjgzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY2My45NDg4IDg0Ny42NTQ0YTU3LjYxOTIgNTcuNjE5MiAwIDAgMS00Mi4zNDg4IDQ5LjI0MTZsLTc0LjE4MjQgMTkuODc4NGE1Ny42IDU3LjYgMCAwIDEtMjkuODE3Ni0xMTEuMjcwNGw3NC4xODI0LTE5Ljg3ODRhNTcuNTY4IDU3LjU2OCAwIDAgMSA1NC42MTEyIDEzLjg5NDRBMjc2LjIwNDggMjc2LjIwNDggMCAwIDAgNzgwLjUwNTYgNjg0LjhINzYxLjZjLTU2LjU1NjggMC0xMDIuNC00NS44NDMyLTEwMi40LTEwMi40VjQ4MGMwLTU2LjU1NjggNDUuODQzMi0xMDIuNCAxMDIuNC0xMDIuNGgyNS42YzMuNjkyOCAwIDcuMzQ3MiAwLjE5MiAxMC45NDQgMC41NzZDNzU5LjAwOCAyNjIuODQ4IDY0NS44ODggMTc5LjIgNTEyIDE3OS4yUzI2NC45OTIgMjYyLjg0OCAyMjUuODU2IDM3OC4xNzZjMy41OTY4LTAuMzg0IDcuMjUxMi0wLjU3NiAxMC45NDQtMC41NzZoMjUuNmM1Ni41NTY4IDAgMTAyLjQgNDUuODQzMiAxMDIuNCAxMDIuNHYxMDIuNGMwIDU2LjU1NjgtNDUuODQzMiAxMDIuNC0xMDIuNCAxMDIuNGgtMjUuNmMtNTYuNTU2OCAwLTEwMi40LTQ1Ljg0MzItMTAyLjQtMTAyLjRWNDgwYzAtMi42NzUyIDAuMTAyNC01LjMyNDggMC4zMDA4LTcuOTQ4OEEzOC43Nzc2IDM4Ljc3NzYgMCAwIDEgMTM0LjQgNDY3LjJjMC0yMDEuODExMiAxNjkuMzgyNC0zNjQuOCAzNzcuNi0zNjQuOHMzNzcuNiAxNjIuOTg4OCAzNzcuNiAzNjQuOGMwIDEuNjQ0OC0wLjEwMjQgMy4yNjQtMC4zMDA4IDQuODUxMiAwLjE5ODQgMi42MjQgMC4zMDA4IDUuMjczNiAwLjMwMDggNy45NDg4djEwMi40YzAgMzQuMjIwOC0xNi43ODA4IDY0LjUxMi00Mi41NjY0IDgzLjExMDRhMzI3LjQ2ODggMzI3LjQ2ODggMCAwIDEtMTgzLjA4NDggMTgyLjE0NHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjEwNjg0Ij48L3BhdGg+PC9zdmc+",
                name: "客服助手",
                ad: "#妈妈不用做超人#考拉神助攻，独家揭秘",
                time: "2022.4.13",
                background_color: "rgb(0, 139, 252)",
            },
            //通知消息
            {
                image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMDk2ODc4MjY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExNjYzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyMTJsNDguOCAxMmMxMDEuNiAyNC44IDE3NiAxMTcuNiAxNzYgMjIwLjh2MjU0LjRsMTguNCAxOC40IDI0LjggMjUuNmgtNTM2bDI0LjgtMjUuNiAxOC40LTE4LjRWNDQ0LjhjMC0xMDMuMiA3My42LTE5Ni44IDE3Ni0yMjAuOGw0OC44LTEyTTUxMiA2NGMtMzYuOCAwLTY0IDMwLjQtNjQgNjh2MzAuNEMzMjAuOCAxOTIgMjIzLjIgMzA3LjIgMjIzLjIgNDQ0Ljh2MjI4LjhMMTM2IDc2My4ydjQ0LjhoNzUydi00NC44bC04Ny4yLTg5LjZWNDQ0LjhjMC0xMzcuNi05Ny42LTI1Mi44LTIyNC44LTI4My4ydi0yOC44YzAtMzItMTcuNi02MC44LTQ4LTY3LjItNS42LTEuNi0xMS4yLTEuNi0xNi0xLjZ6IG04OCA4MDhINDI0YzAgNDkuNiAzOC40IDg4IDg4IDg4czg4LTM4LjQgODgtODh6IiBwLWlkPSIxMTY2NCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",
                name: "通知消息",
                ad: "“吉祥小区公园篮球第一人”点赞了您的动态",
                time: "2022.4.16",
                background_color: "rgba(0, 183, 255, 0.801)",
            },
            //种草社区
            {
                image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUwMDk3NjE3MzQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1OTk1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNC4yIDQ3Mi4zYy0xMy01LjctMy43LTIzLjUgOC4yLTE5IDkxIDM0IDE0Ni44IDEwOC43IDE4Mi40IDEzOC41IDUuNiA0LjcgMTQgMi45IDE3LjMtMy41IDE2LjgtMzIgNDUuOC0xMTMuNy01Ny4xLTE2OC42LTg3LjMtNDYuNS0xODgtNTMuNi0yNDcuMy04Mi4yLTE0LjUtNy0zMS4xIDQuNi0yOS45IDIwLjcgNSA2OS43IDI4LjkgMTI0LjcgNjIuMyAxODEuNSA2Ny4zIDExNC4zIDE0MC42IDEzMi45IDIxNi42IDEwNCAyLjItMC45IDQuNS0xLjggNy0zIDctMy40IDguMy0xMi45IDIuNS0xOC4xIDAuMSAwLTQ1LjctNjkuMy0xNjItMTUwLjN6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNTk5NiI+PC9wYXRoPjxwYXRoIGQ9Ik0yODIuNyA4NDkuOWM3OS41LTEzNyAxNzIuNC0yNjMuMSAzODUuNC00MDEuMyA5LjgtNi40IDIuMS0yMS41LTguOS0xNy40QzQ5Ny43IDQ5Mi44IDQyOS43IDU4NSAzNzMuMyA2NDAuOGMtOC43IDguNy0yMy40IDYuMy0yOS4xLTQuNi0yNy4yLTUxLjgtNjkuNS0xNzQuMSA5Ny4zLTI2My4xIDE0Ny43LTc4LjggMzE5LjktOTEuNCA0MjkuNy05My4zIDE4LjktMC4zIDMxLjUgMTkuNCAyMy4zIDM2LjRDODYzLjcgMzgwIDg0Mi42IDQ3OCA3ODkuOSA1NjcuNiA2ODAuOCA3NTMuMSA1NDUuNSA3NjYuNyA0MjIuMiA3MTkuOGMtOC44LTMuNC0xOC44LTAuMi0yNCA3LjctMTYuNiAyNS4yLTUwLjMgODAuMS01OC43IDEyMi40LTExLjQgNTYuOC04Mi4yIDQzLjktNTYuOCAweiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjU5OTciPjwvcGF0aD48cGF0aCBkPSJNMzc1IDQxOS42Yy0zMC4xIDI4LjItNDUuOCA1Ny43LTUyLjQgODYuMSA0MC42IDMyLjQgNzAuMiA2Ny43IDkyLjEgODUuOSAxLjIgMSAyLjUgMS42IDMuOSAyLjEgNi41LTYuNyAxMy4zLTEzLjcgMjAuNC0yMC43IDE1LjItMzcuOSAyNS4zLTEwNS43LTY0LTE1My40ek0zMTguOCA1NDguMmMxLjYgMzYuMSAxNC43IDY3LjYgMjUuNSA4OC4xIDUuNyAxMC45IDIwLjMgMTMuMyAyOS4xIDQuNiA0LjktNC45IDEwLTEwIDE1LjEtMTUuNC0wLjYtMS0xLjMtMi0yLjItMi44IDAtMC4xLTIwLjEtMzAuNS02Ny41LTc0LjV6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNTk5OCI+PC9wYXRoPjwvc3ZnPg==",
                name: "种草社区",
                ad: "你收到了新的通知",
                time: "2022.4.15",
                background_color: "rgba(9, 126, 25, 0.623)",
            },
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }

})
