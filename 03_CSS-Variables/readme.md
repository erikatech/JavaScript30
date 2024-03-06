# 🖍️ CSS Variables
リアルタイムに、「余白」「ぼかし」「カラー」を変更できるツールを制作しました！

## 🎬 Video
https://github.com/erikatech/JavaScript30/assets/155863891/e3d4e37c-78e1-41dd-974b-1d2a9f00a7b8

## 👩🏽‍🍳 Process
1. すべての `input` を取得
2. 関数宣に処理をまとめる
	1. `dataset` で、`data-sizing` 属性の有無を確認
	2. `setProperty` メソッドにて、`:root` の値を変更
3. `forEach()` で、`input` タグを取得し、イベントを発火

## 📚 What I Learned
  - `:root` で定義されたCSSカスタムプロパティを扱う場合は、`setProperty()` で管理した方が、メリットが多いようでした。

  【メリット】
    - スタイルの一貫性を保つことができる。
    - グローバルな影響を考慮することができる。
    - 可読性があがる。

  自身で考え作成した `sub.js` では、`style` 自体を変更してしまっていました。

  - HTML に `data` 属性を用いることで、単位をまとめることで、ループ処理に対応できる。<br>-> ループ上で値を検討する必要がないので、便利だなと感じました。