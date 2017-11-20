var path = require('path');
var webpack = require('webpack');
module.exports={

  entry:[
      //   'script!jquery/dist/jquery.min.js',
      // 'script!foundation-sites/dist/js/foundation.min.js',

  //    'webpack/hot/only-dev-server',
      'app/index.js'
  ],
  output:{
     path:__dirname,
     filename:'./assets/js/bundel.js'
  },
  // externals: {
  //   jquery: 'jQuery'
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     '$': 'jquery',
  //     'jQuery': 'jquery'
  //   })
  // ],
  plugins: [
    new webpack.DefinePlugin({
        '__SERVER__': 'false',
        '__BROWSER__': 'true', // you really only need one of these, but I like to have both
    }),
  ],
  resolve:{
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.jsx', '.js', '.json'],
    alias:{
      // HomePage:'app/component/HomePage.js',

       reducer: 'app/reducer/reducer.js',
       store:'app/store.js',

       //khai bao action
       actionUserName:'app/action/actionUserName.js',
       actionNotification:'app/action/actionNotification.js',
       actionMenu:'app/action/actionMenu.js',

       actionCloseAccount:'app/action/actionCloseAccount.js',
        actionAddAccount:'app/action/actionAddAccount.js',
       actionDatLenh:'app/action/actionDatLenh.js',

       PrivateRoute : 'app/components/PrivateRoute.js',
       HomePage: 'app/components/HomePage.js',
       Account: 'app/components/Account.js',
       Main: 'app/components/Main.js',
       Nav: 'app/components/Nav.js',
       Transaction: 'app/components/Transaction.js',
       SignIn: 'app/components/SignIn.js',
       AccountInfo: 'app/components/AccountInfo.js',
       Notification: 'app/components/Notification.js',
       Captcha: 'app/components/Captcha.js',
       ModalCloseAccount:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/ModalCloseAccount.js',
      FormModal:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/FormModal.js',
      RowItemMoney:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/RowItemMoney.js',
      RowItemAcount:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/RowItemAcount.js',
      TableMoney:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/TableMoney.js',
      Tb_Account:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/Tb_Account.js',

      FormCloseAcount:'app/components/VSD/QLTTTK_NDT/CloseAcount/components/FormCloseAcount.js',
      Menu:'app/components/Menu.js',

      MenuLeft:'app/components/MenuLeft.js',
      LoginSuccess:'app/components/LoginSuccess.js',
      BtnLogin:'app/components/BtnLogin.js',

      //Component VSD
      CreateAccountNDT:'app/components/VSD/QLTTTK_NDT/CreateAccountNDT.js',
      Repo:'app/components/VSD/QLTTTK_NDT/Repo.js',
      Repos:'app/components/VSD/QLTTTK_NDT/Repos.js',
      Pvg_Info:'app/components/VSD/QLTTTK_NDT/Pvg_Info.js',
      Inf:'app/components/VSD/QLTTTK_NDT/Inf.js',
      TabDemo:'app/components/VSD/QLTTTK_NDT/TabDemo.js',


       CloseAccount2:     'app/components/VSD/QLTTTK_NDT/CloseAcount/CloseAccount.js',
       CloseAccount:     'app/components/VSD/QLTTTK_NDT/CloseAcount/CloseAccountmmmmmmm.js',
      // Modal_CloseAccount:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/Modal_CloseAccount.js',
      // RowItemMoney:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/RowItemMoney.js',
      // TableMoney:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/TableMoney.js',
      // RowItemAcount:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/RowItemAcount.js',
      // FormModal:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/FormModal.js',
      // FormCloseAcount:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/FormCloseAcount.js',
      // TableAcount:'app/components/VSD/QLTTTK_NDT/CloseAcount/Component/TableAcount.js',
      AddCreateAccountNDT:'app/components/VSD/QLTTTK_NDT/AddCreateAccountNDT/AddCreateAccountNDT.js',
        CompareCommand:'app/components/VSD/QLTTTK_NDT/CompareCommand/CompareCommand.js',

      // Dat lenh
      DatLenh:'app/components/VSD/DatLenh/DatLenh.js',
      ThongTinQuy:'app/components/VSD/DatLenh/components/ThongTinQuy.js',
      UyQuyen:'app/components/VSD/DatLenh/components/UyQuyen.js',
      ChiTiet:'app/components/VSD/DatLenh/components/ChiTiet.js',
      HoanDoiGoiSip:'app/components/VSD/DatLenh/HoanDoiGoiSip.js',
      DauTuDinhKi: 'app/components/VSD/DatLenh/DauTuDinhKi.js'



    }
  },
  module:{
    loaders:[
      {
        loader:'babel-loader', //thu vien nhu 1 chuong trinh dich
        query:{
          presets:['es2015','react','stage-0'] // cac thu vien can de webpack no hieu dc doan ma jsx html
        },
        test:/\.jsx?$/,    //file nao xu dung trong goi bundel
        exclude:/node_modules/ //ngoai tru khog su dung
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  // devServer: {
  //
  //   hot: true
  // },
  node:{
    net:'empty',
    dns:'empty'
  }
}
