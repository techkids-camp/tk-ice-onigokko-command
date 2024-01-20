### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# car-dealer

#コマンドを使えるようにしよう

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```ghost

custom.speed()
custom.hole()
custom.jump()
custom.spy()
custom.tp()

```

```template
player.onChat("5", function () {
    custom.speed()
})
player.onChat("1", function () {
    custom.tp()
})
player.onChat("2", function () {
    custom.jump()
})
player.onChat("3", function () {
    custom.hole()
})
player.onChat("4", function () {
    custom.spy()
})

```