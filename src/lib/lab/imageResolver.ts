/**
 * طبقة resolver للصور — نقطة الاستبدال الوحيدة لاحقاً بـ ImageKit.
 * الآن: تُرجع مسارات محلية public/lab (تعمل offline).
 * لاحقاً: غيّر imageSourceToUrl فقط لتبني روابط ImageKit من نفس الـ key.
 */
export type LabImageKey = string;

const IMAGEKIT_ENDPOINT_PLACEHOLDER = ""; // يُعبأ في مرحلة الإنتاج فقط، لا يُستخدم في المختبر

export function resolveLabImage(src: string): string {
  if (!src) return "/lab/cover-mazalat.svg";
  // مسار محلي
  if (src.startsWith("/lab/") || src.startsWith("/")) return src;
  // http(s) مؤقت للفيديوهات المصغرة فقط — الصور الأساسية محلية
  if (src.startsWith("http")) return src;
  // key مختصر مثل "cover-shabak" -> "/lab/cover-shabak.svg"
  return `/lab/${src}.svg`;
}

export function futureImagekitUrl(key: string): string {
  // مثال مستقبلي: `${ENDPOINT}/${key}?tr=w-1200,q-70`
  void IMAGEKIT_ENDPOINT_PLACEHOLDER;
  return resolveLabImage(key);
}
