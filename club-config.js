// === club-config.js ===
// 在這裡貼上你的 Firebase Web SDK 設定。
// 取得方式：Firebase Console → Project settings → Your apps (</>) → SDK setup and configuration
// 只需要改 firebaseConfig 內容，其他檔案會自動引用。

window.CLUB_EVAL_CONFIG = {
  firebaseConfig: {
    apiKey: "AIzaSyDNwrPCURs_zLQQ-q2RAk8J3wQWNvv6lMw",
    authDomain: "ai-1141020.firebaseapp.com",
    projectId: "ai-1141020",
    storageBucket: "ai-1141020.firebasestorage.app",
    messagingSenderId: "549358647551",
    appId: "1:549358647551:web:d83d32174c87e61cca34ca"
  },
  loginDomain: "club.zlchs", // email = `${code}@${loginDomain}`
  defaultPassword: "123456"    // 統一密碼（可保留給提示用）
};

// 社團清單（201=壢青社；已移除 303 合唱團）
window.CLUBS = [
  {code:"102", name:"童軍社"}, {code:"103", name:"慈幼社"}, {code:"104", name:"動物保護社"},
  {code:"105", name:"親善大使社"}, {code:"106", name:"國際交流社"},
  {code:"201", name:"壢青社"}, {code:"202", name:"戀東瀛社"}, {code:"203", name:"桌遊社"},
  {code:"204", name:"悅讀社"}, {code:"205", name:"辯論社"}, {code:"207", name:"韓國文化研究社"},
  {code:"301", name:"樂旗社"}, {code:"302", name:"國樂社"},
  {code:"304", name:"飛弦吉他社"}, {code:"305", name:"熱音社"}, {code:"306", name:"流行K歌社"},
  {code:"402", name:"羽球社"}, {code:"403", name:"桌球社"}, {code:"405", name:"排球社"},
  {code:"406", name:"游泳社"}, {code:"407", name:"女籃社"}, {code:"408", name:"飛盤社"}, {code:"409", name:"男籃社"},
  {code:"501", name:"街舞社"}, {code:"502", name:"勁舞社"},
  {code:"601", name:"團康康輔社"}, {code:"603", name:"電影欣賞社"}, {code:"604", name:"巧藝社"},
  {code:"605", name:"時尚造型社"}, {code:"606", name:"魔術社"}, {code:"607", name:"二次元研究社"},
  {code:"608", name:"攝影社"}, {code:"609", name:"壢商狂塗社"}, {code:"610", name:"戲劇社"},
  {code:"611", name:"烘焙社"}, {code:"612", name:"滑板社"}
];
