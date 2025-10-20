使用說明（簡版）
----------------
1. 將 `club-config.js` 內的 firebaseConfig 換成你的設定；loginDomain 如需修改也在同檔。
2. Firebase Authentication 建立使用者（email = 代碼@loginDomain；密碼初始 1234）。
3. Firestore 規則貼上：
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /evaluations/{docId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
        && request.resource.data.evaluator_code == request.auth.uid
        && docId == (request.resource.data.evaluator_code + "_" + request.resource.data.target_code)
        && !exists(/databases/$(database)/documents/evaluations/$(docId));
      allow update, delete: if false; // 送出後不可修改/刪除
    }
  }
}
4. 放到 EzPage/Hosting：先開 `login.html` 登入 → 自動前往 `index.html` 填寫。
