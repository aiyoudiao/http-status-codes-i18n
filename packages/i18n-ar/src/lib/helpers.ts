/**
 * © 2024 aiyoudiao
 *
 * تم إنشاء هذا الملف بواسطة aiyoudiao ويتضمن الكثير من الجهد والعمل والحصافة.
 *
 * يمكنك استخدام وتعديل وتوزيع هذا الملف بحرية، لكن يرجى الاحتفاظ ببيان حقوق النشر هذا.
 *
 * إذا وجدت هذا الملف مفيدًا، يرجى إعطائي نجمة أو تابعوني ツ.
 *
 * معلومات الاتصال:
 * - البريد الإلكتروني: ,newdiao@163.com,
 * - GitHub: ,https://github.com/aiyoudiao,
 *
 * سعيد الترميز! تذكر، الشفرة هي الشعر، والواجهة الأمامية هي الفن. ツ
 */
import { HttpStatusCode, HttpStatusCodeByCode } from './status-code';
import { HttpStatusText, HttpStatusTextByCode } from './status-text';
import { HttpStatusDescriptionByCode } from './status-description';

/** Key-value mapping of HTTP status codes and HTTP status texts. */
export const statusCodeToStatusTextMap: Record<number, string> = Object.keys(
  HttpStatusCodeByCode
)
  .filter((name) => name.includes('h'))
  .reduce(
    (map, cur) => ({
      ...map,
      [HttpStatusCodeByCode[cur as never]]: HttpStatusTextByCode[cur as never],
    }),
    {}
  );
/** Key-value mapping of HTTP status codes and HTTP status descriptions. */
export const statusCodeToStatusDescriptionMap: Record<number, string> = Object.keys(
  HttpStatusCodeByCode
)
  .filter((name) => name.includes('h'))
  .reduce(
    (map, cur) => ({
      ...map,
      [HttpStatusCodeByCode[cur as never]]: HttpStatusDescriptionByCode[cur as never],
    }),
    {}
  );
/** Key-value mapping of HTTP status texts and HTTP status codes. */
export const statusTextToStatusCodeMap: Record<string, number> = Object.keys(
  HttpStatusTextByCode
)
  .filter((name) => name.includes('h'))
  .reduce(
    (map, cur) => ({
      ...map,
      [HttpStatusTextByCode[cur as never]]: HttpStatusCodeByCode[cur as never],
    }),
    {}
  );
/** Key-value mapping of HTTP status texts and HTTP status descriptions. */
export const statusTextToStatusDescriptionMap: Record<string, string> = Object.keys(
  HttpStatusTextByCode
)
  .filter((name) => name.includes('h'))
  .reduce(
    (map, cur) => ({
      ...map,
      [HttpStatusTextByCode[cur as never]]: HttpStatusDescriptionByCode[cur as never],
    }),
    {}
  );

export type StatusInfo = { code: number, message: string, success: boolean };

/**
 * Returns whether the provided status code or status text is valid or not.
 * @example isCodeOrTextValid(200) -> true
 * isCodeOrTextValid('OK') -> true
 *
 * @param codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode
 * @returns yesOrNo: boolean
 */
export function isCodeOrTextValid(codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode): boolean {
  return codeOrText in statusCodeToStatusTextMap || codeOrText in statusTextToStatusCodeMap;
}

/**
 * Returns an object containing information about the provided status code or status text.
 * @example getStatusInfo(200) -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 * getStatusInfo('OK') -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 *
 * @param codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode
 * @returns StatusInfo: { code: number, message: string, success: boolean}
 */
export function getStatusInfo(codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode): StatusInfo {

  if (!isCodeOrTextValid(codeOrText)) {
    throw new Error(`${codeOrText} is not a known HTTP status code or status text.`);
  }

  const [code, message] = [
    statusTextToStatusCodeMap[codeOrText] || codeOrText as number,
    statusCodeToStatusDescriptionMap[codeOrText as number] || statusTextToStatusDescriptionMap[codeOrText]
  ]

  return {
    code,
    message,
    success: code < 400
  }
}

/**
 * Returns whether the provided status code or status text is a successful status or not.
 * @example isStatusSuccessful(200) -> true
 * isStatusSuccessful('OK') -> true
 * isStatusSuccessful(400) -> false
 * isStatusSuccessful('Bad request') -> false
 *
 * @param codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode
 * @returns successful: boolean
 */
export function isStatusSuccessful(codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode): boolean {

  try {
    return getStatusInfo(codeOrText).success;
  } catch (e) {
    return false;
  }
}

/**
 * Returns a string containing the provided status code and simple message.
 * @example getSimpleStatusMessage(200) -> 200 OK
 * getSimpleStatusMessage('OK') -> 200 OK
 *
 * @param codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode
 * @returns simpleStatusMessage: string
 */
export function getSimpleStatusMessage(codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode): string {
  const statusInfo = getStatusInfo(codeOrText)
  return `${statusInfo.code} ${statusInfo.message.split('：')[0]}`;

}

/**
 * Returns a string containing the provided status code and message.
 * @example getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
 * getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
 *
 * @param codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode
 * @returns statusMessage: string
 */
export function getStatusMessage(codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode): string {
  const statusInfo = getStatusInfo(codeOrText)
  return `${statusInfo.code} ${statusInfo.message}`;

}

/**
 * Returns the status code for the given http status text.
 * If the given http status text does not exist, undefined is returned.
 * @example getStatusCode('OK') -> 200
 * @param text: HttpStatusText
 * @returns statusCode: HttpStatusCode
 */
export function getStatusCode(text: HttpStatusText): HttpStatusCode {
  const code = statusTextToStatusCodeMap[`${text}`]
  if (!code) {
    throw new Error(`${text} is not a known HTTP status text.`);
  }
  return code;
}

/**
 * Returns the status text for the given http status code.
 * If the given http status code does not exist, undefined is returned.
 * @example getStatusCode('200') -> OK
 * @param code: HttpStatusCode
 * @returns statusText: HttpStatusText
 */
export function getStatusText(code: HttpStatusCode): string {
  const text = statusCodeToStatusTextMap[`${code}`]
  if (!text) {
    throw new Error(`${code} is not a known HTTP status code.`);
  }
  return text;
}
