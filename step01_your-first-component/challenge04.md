# 自分で書いてみる

ゼロからコンポーネントを書いてください。有効な名前ならどんな名前でも構いませんし、どんなマークアップを返しても構いません。何も思いつかないなら <h1>Good job!</h1> と表示する Congratulations というコンポーネントを書いてみましょう。エクスポートするのを忘れずに！

```diff App.js
+ export default function Congratulations() {
+   return <h1>Good job!</h1>;
+ }

```