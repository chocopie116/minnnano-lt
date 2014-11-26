* 仕様
    * client
        * 一般ユーザー
            * ボタンを押すと3D空間にボールを投げることができる
            * ボタンを押すと、「へぇ〜」という音声がなる
        * オーナーユーザー(部屋をつくる人)
            * ボタンを押されるとリアルタイムにボールが投げられる
    * server
        * ユースケース
            * オーナーユーザーは、roomを創ることができる(パーマリンク)
            * 一般ユーザーは、その部屋にjoinすることができる(roomに紐づくセッション)
            * 一般ユーザーは、オーナーの発表に対して、納得したところはボタンを押すことができる
            * オーナーは、一般ユーザーのへぇをリアルタイムに受け取ることができる

