# React-BMI

## changeイベント
- changeイベントを一つ作ってそのまま他に反映
```js
constructor(props){
  super(props);
  this.state = {
    height: 170,
    weight: 65,
    bmi: 22.49,
    bmiClass: 'Normal'
  }
}

//heightを設定してsetStateで値を更新
heightChange(height){
  this.setState({height: height}, function(){
    console.log(this.state);
  });
}


<div>
  <label>Hieght</label>
  //最初の値をconstrcotrで設定したvalue値にしている
  <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
</div>

```

## Output.jsコンポーネント
- ポンドに変更する関数を作って適用させる
```js

import React, { Component } from 'react';

class Output extends Component {
  //ポンド変更ようの関数
  toFeet(n){
    let realFeet = ((n*0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.floor((realFeet - feet) * 12);
    return feet + " ' " + inches;
  }


  render() {
    //これを包み込む
    let height = this.props.data.height
    let weight = this.props.data.weight
    let bmi = this.props.data.bmi
    let bmiClass = this.props.data.bmiClass

    //変更後
    let height = this.toFeet(this.props.data.height)
    let weight = this.props.data.weight
    let bmi = this.props.data.bmi
    let bmiClass = this.props.data.bmiClass

    return (
      <div className="output">
        {height}
      </div>
    );
  }
}

export default Output;

```

- wieghtにtoLbs関数を作って適用させる
```js
import React, { Component } from 'react';

class Output extends Component {
  toFeet(n){
    let realFeet = ((n*0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.floor((realFeet - feet) * 12);
    return feet + " ' " + inches;
  }

  //関数を作って
  toLbs(n){
    let nearExact = n/0.45539237;
    let lbs = Math.floor(nearExact);
    return lbs;
  }

  render() {
    let height = this.toFeet(this.props.data.height)
    //関数でラップ thisがないと参照できないので注意
    let weight = this.toLbs(this.props.data.weight)
    let bmi = this.props.data.bmi
    let bmiClass = this.props.data.bmiClass

    return (
      <div className="output">
        {weight}
      </div>
    );
  }
}

export default Output;


```

## 条件付きリンク
- bmiClassを用いて三項演算子でリンクを設定させる
```js
return (
  <div className="output">
    <h3>{height}</h3>
    <h3>{weight}lbs</h3>
    <h3>{bmi}</h3>
    //ここで条件を設定してLINKを設定
    <h3 className={(this.props.data.bmiClass === "Obese") ? "danger" : "" } > {bmiClass} {(this.props.data.bmiClass === "Obese") ? <a href='http://yahoo.co.jp'>What Can i Do?</a> : "" }</h3>

  </div>
);

```
