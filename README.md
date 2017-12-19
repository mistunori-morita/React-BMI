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

##

##
