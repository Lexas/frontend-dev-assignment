/*
 *  /MathJax/localization/he/TeX.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Localization.addTranslation("he","TeX",{version:"2.5.0",isLoaded:!0,strings
:{ExtraOpenMissingClose:"סוגר פתיחה מיותר או סוגר סיום חסר",ExtraCloseMissingOpen
:"סוגר סיום מיותר או סוגר פתיחה חסר",MissingLeftExtraRight:"חוק ‎\\left חסר או חוק ‎\\right מיותר"
,MissingScript:"חסר ארגומנט כתב עילי או כתב תחתי",ExtraLeftMissingRight:"‎\\left מיותר או חוק ‎\\right חסר"
,Misplaced:"%1 במקום שגוי",MissingOpenForSub:"סוגר פתיחה חסר לכתב תחתי",MissingOpenForSup
:"סוגר פתיחה חסר לכתב עילי",AmbiguousUseOf:"שימוש דו־משמעי ב־‎%1",EnvBadEnd:"‎\\begin{%1}‎ הסתיים ב־‎\\end{%2}‎"
,EnvMissingEnd:"‎\\end{%1}‎ חסר",MissingBoxFor:"חסרה תיבה עבור %1",MissingCloseBrace
:"סוגר סיום חסר",UndefinedControlSequence:"רצף בקרה בלתי־מוגדר %1",DoubleExponent
:"מעריך כפול: יש להשתמש בסוגריים להבהרה",DoubleSubscripts:"כתב תחתי כפול: יש להשתמש בסוגריים להבהרה"
,DoubleExponentPrime:"תג גורם למעריך כפול; יש להשתמש בסוגריים להבהרה",CantUseHash1
:'לא ניתן להשתמש ב"תו מקרו פרמטר #" במצב מתמטיקה',MisplacedMiddle:"על ‎%1 להיות בין ‎\\left ל־‎\\right"
,MisplacedLimits:"מותר להשתמש ב־‎%1 רק באופרטורים",MisplacedMoveRoot:"על ‎%1 להיות בתוך שורש"
,MultipleCommand:"מספר מרובה של ‎%1",IntegerArg:"הארגומנט ל־‎%1 צריך להיות מספר שלם"
,NotMathMLToken:"%1 אינו אלמנט token תקין",InvalidMathMLAttr:"מאפיין MathML בלתי־תקין: %1"
,UnknownAttrForElement:"המאפיין %1 אינו מוּכר בתור מאפיין של %2",MaxMacroSub1:"מספר רב מדי של החלפות המקרו ב־MathJax; האם יש קריאה רקורסיבית למקרו?"
,MaxMacroSub2:"מספר רב מדי של ההחלפות ב־MathJax; האם יש סביבת LaTeX רקורסיבית?",MissingArgFor
:"ארגומנט חסר עבור ׂ%1",ExtraAlignTab:"טאב יישור מיותר בטקסט ב־‎\\cases",BracketMustBeDimension
:"ארגומנט בסוגריים ב־‎%1 צריך להיות ממד",InvalidEnv:"שם סביבה בלתי־תקין '%1'",UnknownEnv
:"סביבה בלתי־ידועה '%1'",ExtraCloseLooking:"נמצא סוגר סיום מיותר בעת חיפוש אחר %1"
,MissingCloseBracket:"לא נמצא '‪]‬' מסיים עבור ארגומנט ל־‎%1",MissingOrUnrecognizedDelim
:"תוחם חסר בלתי־מוּכר עבור ‎%1",MissingDimOrUnits:"חסר ממד או יחידות עבור ‎%1",TokenNotFoundForCommand
:"לא נמצא %1 עבור %2",MathNotTerminated:"נוסחה מתמטית לא גמורה בתיבת הטקסט",IllegalMacroParam
:"הפניה בלתי־תקינה לפרמטר של מקרו",MaxBufferSize:"מאגר MathJax פנימי גדול מדי; האם יש כאן קריאת מקרו רקורסיבית?"
,CommandNotAllowedInEnv:"‎%1 אינו מורשה בסביבה %2",MultipleLabel:"התווית '%1' מוגדרת מספר פעמים"
,CommandAtTheBeginingOfLine:"המקרו %1 צריך להיכתב בתחילת השורה",IllegalAlign:"יישור בלתי־תקין הוגדר ב־‎%1"
,BadMathStyleFor:"סגנון נוסחה גרוע עבור ‎%1",PositiveIntegerArg:"הארגומנט ל־‎%1 צריך להיות שלם חיובי"
,ErroneousNestingEq:"קינון שגוי של מבני משוואה",MultlineRowsOneCol:"לשורות בתוך הסביבה %1 צריכה להיות רק עמודה אחת"
,MultipleBBoxProperty:"המאפיין %1 הוגדר פעמיים ב־‎%2",InvalidBBoxProperty:"המאפיין '%1' אינו נראה כמו צבע, ממד דיפון או סגנון"
,ExtraEndMissingBegin:"נמצא ‎%1 מיותר או ‎\\begingroup חסר",GlobalNotFollowedBy:"‎%1 שאין אחריו ‎\\let‏, ‎\\def או ‎\\newcommand"
,UndefinedColorModel:"דגם הצבע '%1' אינו מוגדר",ModelArg1:"ערכי צבע עבור הדגם %1 דורשים 3 מספרים"
,InvalidDecimalNumber:"מספר עשרוני בלתי־תקין",ModelArg2:"ערכי צבע עבור דגם %1 צריכים להיות בין %2 לבין %3"
,InvalidNumber:"מספר בלתי־תקין",NewextarrowArg1:"הארגומנט הראשון ל־‎%1 צריך להיות שם רצף בקרה"
,NewextarrowArg2:"הארגומנט השני ל־‎%1 צריך להיות שני מספרים שלמים מופרדים בפסיק",
NewextarrowArg3:"הארגומנט השלישי ל־‎%1 צריך להיות מספר תו יוניקוד",NoClosingChar:"לא נמצא %1 מסיים"
,IllegalControlSequenceName:"שם רצף בקרה בלתי־תקין עבור ‎%1",IllegalParamNumber:"מספר בלתי־תקין של פרמטרים הוגדר ב־‎%1"
,MissingCS:"אחרי ‎%1 יש לכתוב רצף בקרה",CantUseHash2:"שימוש בלתי־תקין ב־# בתבנית עבור %1"
,SequentialParam:"הפרמטרים עבור %1 צריכים להיות ממוספרים ברצף",MissingReplacementString
:"מחרוזת החלפה חסרה עבור ההגדרה של ‎%1",MismatchUseDef:"השימוש ב־‎%1 אינו תואם להגדרה שלו"
,RunawayArgument:"ארגומנט ברח מ־‎%1?",NoClosingDelim:"לא נמצא תוחם מסיים עבור ‎%1"
}}),MathJax.Ajax.loadComplete("[MathJax]/localization/he/TeX.js");