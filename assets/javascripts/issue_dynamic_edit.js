/*
 * OPTIONS DEFINED FROM CONFIGURATION FILE
 */
if (typeof window._CONF_FORCE_HTTPS === "undefined")
  var _CONF_FORCE_HTTPS = false;
if (typeof window._CONF_DISPLAY_EDIT_ICON === "undefined")
  var _CONF_DISPLAY_EDIT_ICON = "single";
if (typeof window._CONF_LISTENER_TYPE_VALUE === "undefined")
  var _CONF_LISTENER_TYPE_VALUE = "click";
if (typeof window._CONF_LISTENER_TYPE_ICON === "undefined")
  var _CONF_LISTENER_TYPE_ICON = "none";
if (typeof window._CONF_LISTENER_TARGET === "undefined")
  var _CONF_LISTENER_TARGET = "value";
if (typeof window._CONF_EXCLUDED_FIELD_ID === "undefined")
  var _CONF_EXCLUDED_FIELD_ID = [];
if (typeof window._CONF_CHECK_ISSUE_UPDATE_CONFLICT === "undefined")
  var _CONF_CHECK_ISSUE_UPDATE_CONFLICT = false;

_CONF_LISTENER_TARGET =
  _CONF_LISTENER_TARGET === "all" ? "" : " ." + _CONF_LISTENER_TARGET;

/*
 *	SVG ICONS
 *  Source : https://www.iconfinder.com/iconsets/glyphs
 */

const SVG_EDIT =
  '<svg style="width: 1em; height: 1em;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="svg_edit"><path d="m2 20c0 1.1.9 2 2 2h2.6l-4.6-4.6z"/><path d="m21.6 5.6-3.2-3.2c-.8-.8-2-.8-2.8 0l-.2.2c-.4.4-.4 1 0 1.4l4.6 4.6c.4.4 1 .4 1.4 0l.2-.2c.8-.8.8-2 0-2.8z"/><path d="m14 5.4c-.4-.4-1-.4-1.4 0l-9.1 9.1c-.5.5-.5 1.1-.1 1.5l4.6 4.6c.4.4 1 .4 1.4 0l9.1-9.1c.4-.4.4-1 0-1.4z"/></g></svg>';
const SVG_VALID =
  '<svg style="width: 1em; height: 1em; fill:white;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6   c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z" class="svg_check"/></g></svg>';
const IDE_SVG_COPY =
  '<svg style="width: 1em; height: 1em;" viewBox="-1.6 -1.6 19.2 19.2" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
const IDE_SVG_COPIED =
  '<svg style="width: 1em; height: 1em;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6   c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z" class="svg_check"/></svg>';
const SVG_CANCEL =
  '<svg style="width: 1em; height: 1em;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" class="svg_cancel"/></g></svg>';

/*
 * Allow inclusion from other page
 * See https://github.com/Ilogeek/redmine_issue_dynamic_edit/commit/26684a2dd9b12dcc7377afd79e9fe5c142d26ebd for more info
 */
const cleanURL = function (url) {
  let u = new URL(url);
  return `${u.protocol}//${u.host}${u.pathname}`;
};
let LOCATION_HREF =
  typeof custom_location_href !== "undefined"
    ? cleanURL(custom_location_href)
    : cleanURL(window.location.href);

if (_CONF_FORCE_HTTPS) {
  LOCATION_HREF = LOCATION_HREF.replace(/^http:\/\//i, "https://");
}

/* Check if admin want to display all editable fields when hovering the whole details block
 * or if user has to hover every element to discover if (s)he can edit it
 */
if (_CONF_DISPLAY_EDIT_ICON === "block") {
  document
    .querySelectorAll("body.controller-issues.action-show .issue.details")
    .forEach((elt) => elt.classList.add("showPencils"));
}

const updateCSRFToken = function (token) {
  document
    .querySelectorAll('input[name="authenticity_token"]')
    .forEach((elt) => (elt.value = token));
  document
    .querySelector('meta[name="csrf-token"]')
    .setAttribute("content", token);
};

const setCSRFTokenInput = function (token) {
  document.querySelectorAll('form[method="post"]').forEach((elt) => {
    if (!elt.querySelectorAll('input[name="authenticity_token"]').length) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", "authenticity_token");
      input.value = token;
      elt.insertBefore(input, null);
    }
  });
};

/*
 * COPY TO CLIPBOARD
 * All helpers are prefixed with "ide" to avoid clashes with Redmine's global copyToClipboard()
 */
const _IDE_TXT_COPY_LABEL =
  typeof _TXT_COPY_TO_CLIPBOARD !== "undefined"
    ? _TXT_COPY_TO_CLIPBOARD
    : "Copy to clipboard";
const _IDE_TXT_COPIED_LABEL =
  typeof _TXT_COPIED_TO_CLIPBOARD !== "undefined"
    ? _TXT_COPIED_TO_CLIPBOARD
    : "Copied!";

/* Create the clipboard icon element */
const ideCreateCopyButton = function () {
  const btn_copy = document.createElement("span");
  btn_copy.classList.add("iconCopy");
  btn_copy.setAttribute("role", "button");
  btn_copy.setAttribute("tabindex", "0");
  btn_copy.setAttribute("title", _IDE_TXT_COPY_LABEL);
  btn_copy.setAttribute("aria-label", _IDE_TXT_COPY_LABEL);
  btn_copy.innerHTML = IDE_SVG_COPY;
  return btn_copy;
};

/* Visible text of an element, ignoring the plugin's own elements (icons, edit form) */
const ideGetVisibleText = function (element) {
  if (!element) return "";
  const own = ".iconEdit, .iconCopy, .dynamicEditField, .refreshData";
  /* No plugin element inside : innerText keeps line breaks between paragraphs */
  if (!element.querySelector(own))
    return element.innerText.replace(/[ \t\u00a0]+\n/g, "\n").trim();
  let text = "";
  element.childNodes.forEach(function (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.matches(own + ", script, style")) return;
      text += node.innerText;
    }
  });
  return text.replace(/[ \t\u00a0]+\n/g, "\n").trim();
};

/* Determine the text to copy depending on where the icon has been placed */
const ideGetCopyTextFor = function (btn_copy) {
  /* Description : rendered wiki content */
  const description = btn_copy.closest("div.issue.details .description");
  if (description) {
    return ideGetVisibleText(description.querySelector(".wiki"));
  }
  /* Subject */
  const subject = btn_copy.closest("div.issue.details div.subject");
  if (subject) {
    return ideGetVisibleText(subject.querySelector("h3"));
  }
  /* Standard attribute / custom field */
  return ideGetVisibleText(btn_copy.closest(".value"));
};

/* Fallback for non secure contexts (plain HTTP), where navigator.clipboard is not available */
const ideLegacyCopy = function (text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (err) {
    ok = false;
  }
  document.body.removeChild(textarea);
  return ok
    ? Promise.resolve()
    : Promise.reject(new Error("execCommand copy failed"));
};

const ideCopyToClipboard = function (text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => ideLegacyCopy(text));
  }
  return ideLegacyCopy(text);
};

/* Short visual feedback on the icon */
const ideShowCopyFeedback = function (btn_copy, success) {
  clearTimeout(btn_copy._copyTimeout);
  btn_copy.classList.remove("copied", "copyError");
  if (success) {
    btn_copy.classList.add("copied");
    btn_copy.innerHTML = IDE_SVG_COPIED;
    btn_copy.setAttribute("title", _IDE_TXT_COPIED_LABEL);
  } else {
    btn_copy.classList.add("copyError");
  }
  btn_copy._copyTimeout = setTimeout(function () {
    btn_copy.classList.remove("copied", "copyError");
    btn_copy.innerHTML = IDE_SVG_COPY;
    btn_copy.setAttribute("title", _IDE_TXT_COPY_LABEL);
  }, 1500);
};

const ideHandleCopyClick = function (btn_copy) {
  const text = ideGetCopyTextFor(btn_copy);
  ideCopyToClipboard(text)
    .then(() => ideShowCopyFeedback(btn_copy, true))
    .catch((err) => {
      console.warn("Unable to copy field value to clipboard", err);
      ideShowCopyFeedback(btn_copy, false);
    });
};

/* Generate edit block */
const getEditFormHTML = function (attribute) {
  let formElement = document.querySelector("#issue_" + attribute + "_id");
  formElement = formElement
    ? formElement
    : document.querySelector("#issue_" + attribute);
  formElement = formElement
    ? formElement
    : document.querySelector("#" + attribute);

  // Checkbox specific case
  let is_checkboxes = false;
  let is_file = false;
  let is_list = false;
  let CF_ID = false;
  if (!formElement && attribute.startsWith("custom_field_values_")) {
    CF_ID = attribute.split("custom_field_values_")[1];
    /* Is it a checkbox block ? */
    formElement = document.querySelector("#issue_custom_field_values_" + CF_ID);
    if (formElement) {
      formElement = formElement.closest(".check_box_group");
      is_checkboxes = CF_ID;
    } else {
      /* Is it a file block ? */
      formElement = document.querySelector(
        "#issue_custom_field_values_" + CF_ID + "_blank",
      );
      if (formElement) {
        formElement = formElement.closest("p");
        is_file = CF_ID;
      } else {
        /* Is it a checkbox/radio group ? */
        formElement = document.querySelector(
          "#issue-form .cf_" + CF_ID + ".check_box_group",
        );
        is_list = CF_ID;
      }
    }
  }

  if (formElement) {
    const clone = formElement.cloneNode(true);
    if (is_file) {
      clone.removeChild(clone.querySelector("label"));
    }
    if (clone.matches("select") && !clone.hasAttribute("multiple")) {
      clone.addEventListener("change", function (e) {
        sendData([{ name: clone.getAttribute("name"), value: clone.value }]);
      });
    }
    if (is_checkboxes || is_file || is_list) {
      clone.setAttribute(
        "id",
        "issue_custom_field_values_" + CF_ID + "_dynamic",
      );
    } else {
      clone.setAttribute("id", formElement.getAttribute("id") + "_dynamic");
    }
    const wrapper = document.createElement("div");
    wrapper.classList.add("dynamicEditField");
    wrapper.insertBefore(clone, null);
    if (!clone.matches("select") || clone.hasAttribute("multiple")) {
      let btn_valid = document.createElement("button");
      btn_valid.classList.add("action", "valid");
      btn_valid.innerHTML = SVG_VALID;
      wrapper.insertBefore(btn_valid, null);
    }
    const btn_refuse = document.createElement("button");
    btn_refuse.classList.add("action", "refuse");
    btn_refuse.innerHTML = SVG_CANCEL;
    wrapper.insertBefore(btn_refuse, null);
    return wrapper;
  }

  return null;
};

/* Loop over all form attribute and clone them into details part */
const cloneEditForm = function () {
  const btn_refresh = document.createElement("button");
  btn_refresh.classList.add("refreshData");
  btn_refresh.innerHTML = "&#10227;";
  document
    .querySelector(".issue.details div.subject")
    .insertBefore(btn_refresh, null);

  document
    .querySelectorAll("div.issue.details .attribute")
    .forEach(function (elt) {
      const classList = elt.classList.value.split(/\s+/);

      let attributes = classList.filter(function (elem) {
        return elem != "attribute";
      });
      // Specific case : all "-" are replaced by "_" into form id
      attributes = attributes.map((attr) => attr.replaceAll("-", "_"));

      let custom_field = false;
      attributes.forEach(function (part, index, arr) {
        if (arr[index] === "progress") arr[index] = "done_ratio";
        if (arr[index].startsWith("cf_")) {
          arr[index] = arr[index].replace("cf", "custom_field_values");
          custom_field = arr[index];
        }
      });

      attributes = attributes.join(" ");

      let selected_elt = custom_field ? custom_field : attributes;
      if (attributes && !_CONF_EXCLUDED_FIELD_ID.includes(selected_elt)) {
        let dynamicEditField = getEditFormHTML(selected_elt);
        if (dynamicEditField) {
          let btn_edit = document.createElement("span");
          btn_edit.classList.add("iconEdit");
          btn_edit.innerHTML = SVG_EDIT;
          elt.querySelector(".value").insertBefore(btn_edit, null);
          elt.querySelector(".value").insertBefore(ideCreateCopyButton(), null);
          elt.querySelector(".value").insertBefore(dynamicEditField, null);
        }
      }
    });

  // Specific Case : Description field
  if (
    !_CONF_EXCLUDED_FIELD_ID.includes("description") &&
    document.querySelectorAll("div.issue.details .description").length
  ) {
    const btn_edit = document.createElement("span");
    btn_edit.classList.add("iconEdit");
    btn_edit.innerHTML = SVG_EDIT;
    document
      .querySelector("div.issue.details .description > p strong")
      .insertAdjacentElement("afterend", btn_edit);
    btn_edit.insertAdjacentElement("afterend", ideCreateCopyButton());
    const formDescription = getEditFormHTML("description");
    formDescription
      .querySelector("#issue_description_dynamic")
      .removeAttribute("data-tribute");
    document
      .querySelector("div.issue.details .description")
      .insertBefore(formDescription, null);

    if (
      typeof CKEDITOR === "object" &&
      typeof (CKEDITOR.instances["issue_description"] !== "undefined") &&
      typeof CKEDITOR.instances["issue_description"].getData === typeof Function
    ) {
      const cfg = CKEDITOR.instances["issue_description"].config;
      cfg.height = 100;
      CKEDITOR.replace("issue_description_dynamic", cfg);
    } else if (typeof jsToolBar === typeof Function) {
      const DynamicDescriptionToolbar = new jsToolBar(
        document.querySelector("#issue_description_dynamic"),
      );
      DynamicDescriptionToolbar.setHelpLink(
        "/help/en/wiki_syntax_common_mark.html",
      );
      DynamicDescriptionToolbar.setPreviewUrl(
        "/issues/preview?issue_id=" + _ISSUE_ID + "&project_id=" + _PROJECT_ID,
      );
      DynamicDescriptionToolbar.draw();
    }
  }

  // Specific Case : Title field
  if (!_CONF_EXCLUDED_FIELD_ID.includes("subject")) {
    const btn_edit = document.createElement("span");
    btn_edit.classList.add("iconEdit");
    btn_edit.innerHTML = SVG_EDIT;
    document
      .querySelector("div.issue.details div.subject h3")
      .insertBefore(btn_edit, null);
    document
      .querySelector("div.issue.details div.subject h3")
      .insertBefore(ideCreateCopyButton(), null);
    const formTitle = getEditFormHTML("issue_subject");
    document
      .querySelector("div.issue.details div.subject")
      .insertBefore(formTitle, null);
  }
};

/* Perform action on .value (display edit form) */
document
  .querySelector("body")
  .addEventListener(_CONF_LISTENER_TYPE_VALUE, function (e) {
    let container =
      e.target.closest(".attribute" + _CONF_LISTENER_TARGET) ||
      e.target.closest(".subject");
    if (
      _CONF_LISTENER_TARGET &&
      e.target.closest(".attribute" + _CONF_LISTENER_TARGET)
    ) {
      container = e.target.closest(".attribute");
    }
    if (container) {
      if (e.target.closest(".dynamicEditField"))
        return; /* We're already into a dynamic field, ignore */
      if (e.target.closest(".iconCopy"))
        return; /* Copy icon has its own listener */
      document.querySelectorAll(".dynamicEditField").forEach(function (elt) {
        elt.classList.remove("open");
      });
      if (!e.target.closest("a") && !e.target.closest("button")) {
        let selector = container.querySelector(".dynamicEditField");
        if (selector) selector.classList.add("open");
      }
    }
  });

/* Perform action on .iconEdit (display edit form) */
document
  .querySelector("body")
  .addEventListener(_CONF_LISTENER_TYPE_ICON, function (e) {
    let is_description =
      e.target.matches("div.issue.details div.description > p") ||
      e.target.closest("div.issue.details div.description > p");
    let is_subject =
      e.target.matches("div.issue.details div.subject") ||
      e.target.closest("div.issue.details div.subject");
    if (e.target.matches(".iconEdit") || e.target.closest(".iconEdit")) {
      document.querySelectorAll(".dynamicEditField").forEach(function (elt) {
        elt.classList.remove("open");
      });
      let selector = e.target.closest(".value");
      if (is_description) selector = e.target.closest(".description");
      if (is_subject) selector = e.target.closest(".subject");
      if (selector.querySelector(".dynamicEditField"))
        selector.querySelector(".dynamicEditField").classList.add("open");
    }
  });

/* Copy field value to clipboard when clicking on .iconCopy */
document.querySelector("body").addEventListener("click", function (e) {
  const btn_copy = e.target.closest(".iconCopy");
  if (btn_copy) {
    e.preventDefault();
    e.stopPropagation();
    ideHandleCopyClick(btn_copy);
  }
});
document.querySelector("body").addEventListener("keydown", function (e) {
  const btn_copy = e.target.closest ? e.target.closest(".iconCopy") : null;
  if (btn_copy && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    ideHandleCopyClick(btn_copy);
  }
});

/* Close opened edit form when clicking outside of it
 * - pointerdown (capture) runs before the "click" listeners above, so clicking on another
 *   field closes the current form and the click then opens the new one as usual
 * - clicks inside the form, on its own field (value / pencil) or inside popups that belong
 *   to the form but are rendered elsewhere in the DOM (datepicker, autocomplete, CKEditor
 *   dialogs, mentions) are ignored
 */
const IDE_OUTSIDE_CLICK_IGNORE =
  ".ui-datepicker, .ui-autocomplete, .ui-widget-overlay, .ui-dialog, .cke_dialog, .cke_dialog_background_cover, .cke_panel, .tribute-container, .ajax-indicator, #ajax-indicator";
document.addEventListener(
  "pointerdown",
  function (e) {
    const openFields = document.querySelectorAll(".dynamicEditField.open");
    if (!openFields.length) return;
    const target = e.target;
    if (!target || !target.closest) return;
    /* Click on the page scrollbar */
    if (target === document.documentElement) return;
    if (target.closest(".dynamicEditField")) return;
    if (target.closest(IDE_OUTSIDE_CLICK_IGNORE)) return;
    openFields.forEach(function (field) {
      /* Click on the field's own value / pencil / subject : leave it to the regular listeners */
      const owner =
        field.closest(".value") ||
        field.closest(".description") ||
        field.closest(".subject");
      if (owner && owner.contains(target) && !target.closest(".iconCopy"))
        return;
      field.classList.remove("open");
    });
  },
  true,
);

/* Perform data update when clicking on valid button from edit form */
document.querySelector("body").addEventListener("click", function (e) {
  if (
    e.target.matches(".dynamicEditField .action.valid") ||
    e.target.closest(".dynamicEditField .action.valid")
  ) {
    e.preventDefault();
    let inputs = e.target
      .closest(".dynamicEditField")
      .querySelectorAll("*[name]");
    let formData = [];
    let existingIndex = [];
    inputs.forEach((elt) => {
      const name = elt.getAttribute("name");
      const is_array_field = name.endsWith("[]");
      let not_multiple =
          !elt.matches('input[type="radio"]') &&
          !elt.matches('input[type="checkbox"]');
      if (
          elt.matches('input[type="radio"]:checked') ||
          elt.matches('input[type="checkbox"]:checked') ||
          not_multiple
      ) {
        let values = [elt.value];
        if (elt.matches("select") && elt.hasAttribute("multiple")) {
          values = Array.from(elt.options)
              .filter(function (option) {
                return option.selected;
              })
              .map(function (option) {
                return option.value;
              });
        }
        if (is_array_field || !existingIndex.includes(name)) {
          values.forEach(function (val) {
            existingIndex.push(name);
            formData.push({ name: name, value: val });
          });
        }
      }
    });
    sendData(formData);
    e.target.closest(".dynamicEditField").classList.remove("open");
  }
});

/* Hide edit form when clicking on cancel button */
document.querySelector("body").addEventListener("click", function (e) {
  if (
    e.target.matches(".dynamicEditField .action.refuse") ||
    e.target.closest(".dynamicEditField .action.refuse")
  ) {
    e.preventDefault();
    e.target.closest(".dynamicEditField").classList.remove("open");
  }
});

/* Update whole .details block + history + form with global refresh button */
document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.matches(".refreshData") || e.target.closest(".refreshData")) {
    e.preventDefault();
    sendData();
  }
});

/* Listen on esc key press to close opened dialog box */
document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    document.querySelectorAll(".dynamicEditField").forEach(function (elt) {
      elt.classList.remove("open");
    });
  }
};

/*
 * CONFLICT CHECK
 * Lock versions are compared as numbers : as strings, "10" > "9" is false
 */
const ideParseLockVersion = function (value) {
  const version = parseInt(value, 10);
  return isNaN(version) ? 0 : version;
};

const ideShowConflictNotice = function () {
  if (document.querySelectorAll("#content .conflict").length) return;
  let msg = document.createElement("div");
  msg.classList.add("conflict");
  msg.innerHTML = `${_TXT_CONFLICT_TITLE}
				<div class="conflict-details">
				<div class="conflict-journal">
				<p><a href='#' onClick="window.location.href=window.location.href">${_TXT_CONFLICT_LINK}</a> <strong>${_TXT_CONFLICT_TXT}</strong></p>
				</div>
				</div>`;
  document
    .querySelector("#content")
    .insertBefore(msg, document.querySelector("#content").firstChild);
};

/* Load the issue page and return it as a parsed document */
const ideFetchIssuePage = function () {
  return fetch(LOCATION_HREF, {
    method: "GET",
    credentials: "same-origin",
  })
    .then((res) => res.text())
    .then((data) => new DOMParser().parseFromString(data, "text/html"));
};

const checkVersion = function (callback) {
  ideFetchIssuePage()
    .then((doc) => {
      const distant_input = doc.querySelector("#issue_lock_version");
      const current_input = document.querySelector("#issue_lock_version");
      const current_version = current_input
        ? ideParseLockVersion(current_input.value)
        : 0;
      const distant_version = distant_input
        ? ideParseLockVersion(distant_input.value)
        : current_version;

      if (distant_version > current_version) {
        ideShowConflictNotice();
        /* The page has to be reloaded anyway, polling is pointless from now on */
        setCheckVersionInterval(false);
      }

      if (callback) callback(distant_version, current_version);
      return distant_version;
    })
    .catch((err) => {
      console.warn("Issue while trying to get version (avoiding conflict)");
      console.log(err);
    });
};

let checkVersionInterval = false;
let setCheckVersionInterval = function (activate) {
  if (!_CONF_CHECK_ISSUE_UPDATE_CONFLICT) return false;
  if (activate) {
    /* Start polling only once, and not anymore once a conflict has been detected */
    if (!checkVersionInterval && !document.querySelector("#content .conflict")) {
      checkVersionInterval = window.setInterval(function () {
        if (document.visibilityState === "visible") checkVersion();
      }, 5000);
    }
  } else if (checkVersionInterval) {
    clearInterval(checkVersionInterval);
    checkVersionInterval = false;
  }
};

setCheckVersionInterval(true);

/*
 * PAGE UPDATE
 */
const ideReplaceInnerHTML = function (selector, doc) {
  const target = document.querySelector(selector);
  const source = doc.querySelector(selector);
  if (target && source) target.innerHTML = source.innerHTML;
};

/* Add the journals of the given page that are not displayed yet.
 * Comparing journal ids avoids duplicates when nothing has been journalized
 * (refresh button, unchanged value, failed update) */
const ideAppendMissingJournals = function (doc) {
  const container = document.querySelector("#tab-content-history");
  if (!container) return;
  const missing = Array.from(
    doc.querySelectorAll("#history .journal[id]"),
  ).filter((journal) => !document.getElementById(journal.id));
  if (!missing.length) return;

  const reverse =
    typeof _COMMENTS_IN_REVERSE_ORDER !== "undefined" &&
    _COMMENTS_IN_REVERSE_ORDER;
  if (reverse) {
    /* Newest first : insert from the oldest missing one so the newest ends on top */
    missing
      .reverse()
      .forEach((journal) =>
        container.insertAdjacentElement(
          "afterbegin",
          document.importNode(journal, true),
        ),
      );
  } else {
    missing.forEach((journal) =>
      container.appendChild(document.importNode(journal, true)),
    );
  }
};

/* Update details block, edit form, history and CSRF token from an issue page */
const ideApplyIssuePage = function (doc) {
  if (!doc.querySelector("div.issue.details")) {
    console.warn(
      "redmine_issue_dynamic_edit : the loaded page has no issue details block, nothing updated",
    );
    return false;
  }

  ideReplaceInnerHTML("form#issue-form", doc);
  ideReplaceInnerHTML("#all_attributes", doc);
  ideReplaceInnerHTML("div.issue.details", doc);
  const lock_version = doc.querySelector("#issue_lock_version");
  if (lock_version && document.querySelector("#issue_lock_version"))
    document.querySelector("#issue_lock_version").value = lock_version.value;
  ideAppendMissingJournals(doc);

  cloneEditForm();

  //set datepicker fallback for input type date
  if (
    document.querySelector("input[type=date]") &&
    $("body").find("input[type=date]").datepickerFallback instanceof Function &&
    typeof datepickerOptions !== "undefined"
  ) {
    $("body").find("input[type=date]").datepickerFallback(datepickerOptions);
  }

  const token_input = doc.querySelector('input[name="authenticity_token"]');
  if (token_input) {
    setCSRFTokenInput(token_input.value);
    updateCSRFToken(token_input.value);
  }
  return true;
};

const ideShowErrorExplanation = function (error) {
  if (!document.querySelector("#errorExplanation")) {
    let err_div = document.createElement("div");
    err_div.setAttribute("id", "errorExplanation");
    err_div.innerHTML = error.innerHTML;
    document
      .querySelector(".issue.details")
      .insertAdjacentElement("beforebegin", err_div);

    location.href = "#";
    location.href = "#errorExplanation";
  } else {
    document.querySelector("#errorExplanation").innerHTML = error.innerHTML;
  }
};

/* Global function to perform AJAX call */
let sendData = function (serialized_data) {
  let updateIssue = function (serialized_data) {
    setCheckVersionInterval(false);
    const token = document
      .querySelector("meta[name=csrf-token]")
      .getAttribute("content");
    let params = serialized_data || [];
    params.push({ name: "_method", value: "patch" });
    params.push({ name: "authenticity_token", value: token });

    let request = new XMLHttpRequest();
    request.open("POST", LOCATION_HREF, true);
    let formData = new FormData();
    params.forEach((data) => formData.append(data.name, data.value));

    let callError = function (msg) {
      setCheckVersionInterval(true);
      document.querySelector("#ajax-indicator").style.display = "none";

      /* error and no update, info logged into console */
      console.groupCollapsed(
        "%c -------- Error while updating the issue attribute dynamically -------- ",
        "background: #ff0000; color: white; font-weight:900",
      );
      console.log("POST " + LOCATION_HREF);
      console.log(msg);
      console.groupEnd();
    };

    request.onreadystatechange = function () {
      if (this.readyState != 4) return;
      if (this.status != 200) {
        callError(this.status);
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(this.responseText, "text/html");
      const error = doc.querySelector("#errorExplanation");

      if (error) {
        ideShowErrorExplanation(error);
        /* A failed update is answered with the edit page (HTTP 200), which has no details
         * block and no history. Reload the issue page to put the stored values back
         * into the details block and the edit form. */
        ideFetchIssuePage()
          .then((freshDoc) => {
            ideApplyIssuePage(freshDoc);
            setCheckVersionInterval(true);
          })
          .catch((err) => callError(err));
        return;
      }

      if (document.querySelector("#errorExplanation"))
        document.querySelector("#errorExplanation").remove();

      ideApplyIssuePage(doc);
      setCheckVersionInterval(true);
    };
    request.send(formData);
  };

  if (_CONF_CHECK_ISSUE_UPDATE_CONFLICT) {
    checkVersion(function (distant_version, current_version) {
      /* On conflict, checkVersion displays the notice and the update is not sent */
      if (distant_version <= current_version) {
        updateIssue(serialized_data);
      }
    });
  } else {
    updateIssue(serialized_data);
  }
};

// Init plugin
cloneEditForm();
setCSRFTokenInput(
  document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
);
