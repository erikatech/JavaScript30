# 🥁 JavaScript Drum Kit
キー操作で遊べるドラムキットをVanilla JavaScriptを使用して、制作しました！

キーボードの各キー A / S / D / F / G / H / J / K / L を押すと、それぞれのキーに設定されたドラム音がなり、組み合わせて演奏ができます。

## 🎬 Video
※ 音が出るので、音量にご注意ください！
https://github.com/erikatech/JavaScript30/assets/155863891/26d8698b-c0c9-4121-98b3-95341f1479a7

## 👩🏽‍🍳 Process

1. 音がなるまでの処理を、関数 `playSound` にまとめる
	1. `keydown` イベントの `key` プロパティで、押されたキーを取得
	2. htmlのデータ属性で指定したものは、 `return` <br>該当するものは、指定したオーディオを処理を行う
	3. `audio.currentTime = 0;` にて、オーディオ再生位置を0に戻す
	4. CSS `playing` を追加
2. 該当のキーが押されたときの処理を `forEach` で記述
	1. `transition` が終わったときのイベント `transitionend` を使用し、`removeTransition`関数の処理を行う
	2. `keydown` イベントにて、関数 `playSound` を呼び出す
3. 関数 `removeTransition` にて、CSS `playing` を削除する処理を追加

## 📚 What I Learned

- **`keyCode` は非推奨**：<br>学習動画の中には、`keyCode`プロパティが使用されていましたが、[MDN](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/keyCode)では非推奨となっています。<br>そのため、今回はHTMLで使用するdata属性およびJSで使用するプロパティを `key` で対応できるよう変更しました。

- **if文の省略記法**：
```
if(!audio) return;
```
`true` が省略できることは学習済みでしたが、`false` でもこんなに短く書けるとは知りませんでした。学びです！

- **`transitionend` イベント**：<br>CSSの `transition` が終わったときに使われるイベント<br>[MDN]:https://developer.mozilla.org/ja/docs/Web/API/Element/transitionend_event

- **`propertyName: transform` を識別して、`return` する意味**：<br>関数 `removeTransition` 内に記述のあるif文ですが、なくても動くので、必要なのか気になり、調べました。<br>設置する理由は、以下にあると解釈しました。
```
無関係なトランジションの終了によって想定外の動作が発生することを防ぐため
```
解釈に誤りがある場合は、ご指摘いただけますと幸いです🙇🏻‍♀️