import { useState } from "react";

const fields = [
  { id: "name", label: "お名前", type: "text", placeholder: "山田 花子", required: true },
  {
    id: "email",
    label: "メールアドレス",
    type: "email",
    placeholder: "miiiu@example.com",
    required: true,
  },
  { id: "phone", label: "電話番号", type: "tel", placeholder: "090-0000-0000" },
];

export default function EntryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-3">
        {fields.map((field) => (
          <label key={field.id} className="form-field">
            <span>{field.label}</span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
            />
          </label>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>希望職種</span>
          <select name="position" defaultValue="stylist">
            <option value="stylist">スタイリスト</option>
            <option value="assistant">アシスタント</option>
            <option value="parttime">パート・時短勤務</option>
            <option value="tour">まずはサロン見学</option>
          </select>
        </label>
        <label className="form-field">
          <span>見学希望</span>
          <select name="visit" defaultValue="yes">
            <option value="yes">見学を希望する</option>
            <option value="consult">相談して決めたい</option>
            <option value="no">応募のみ希望</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>メッセージ</span>
        <textarea
          name="message"
          rows="5"
          placeholder="働き方や見学希望日など、お気軽にご記入ください。"
        />
      </label>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-ink/60">
          送信後、担当者よりご連絡いたします。DMでのご相談も歓迎しています。
        </p>
        <button className="gold-button min-w-44" type="submit">
          ENTRY
        </button>
      </div>

      {sent && (
        <p className="border-l border-gold pl-4 text-sm leading-7 text-ink" role="status">
          送信内容を受け付けました。MiiiUの雰囲気に触れていただけるよう、担当者よりご案内いたします。
        </p>
      )}
    </form>
  );
}
