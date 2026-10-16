# ✨ redmine_issue_dynamic_edit

Add new interactive elements to the issue detail page to **dynamically update an issue’s attributes and custom fields**, directly within the details block, and **without any page refresh** (_JIRA-style inline editing_).

This is the [ablida](https://github.com/ablida/redmine_issue_dynamic_edit) fork of [Ilogeek/redmine_issue_dynamic_edit](https://github.com/Ilogeek/redmine_issue_dynamic_edit) by Hugo Zilliox. It adds a copy-to-clipboard icon, in-place description editing, a German translation and several bug fixes (see the changelog).

### 🧩 Features

- Inline editing of standard attributes (status, priority, assignee, category, target version, dates, done ratio, estimated time …), custom fields, the subject and the description
- Select fields are saved as soon as a new value is chosen; other fields are saved with the ✔ button, ✖ or `Esc` closes the editor
- Clicking outside an open editor closes it (date pickers, autocomplete lists and CKEditor dialogs belonging to the editor are ignored)
- The description is edited in place below the “Description” heading instead of in a popup, so the editor stays visible for long descriptions
- Multi-select fields (e.g. multiple-value list custom fields) save all selected values
- A clipboard icon next to the pencil copies the displayed value of an attribute, custom field, the subject or the description
- After saving, the details block, the edit form at the bottom of the page and the history are refreshed. The ⟳ button next to the subject reloads them manually
- Validation errors from Redmine (e.g. a required field for the new status) are shown above the details block and the stored values are put back
- Optional conflict check that prevents overwriting changes made by other users (see below)
- Translations: English, German, French, Spanish, Turkish

The plugin is only active on the issue detail page and only for users with the _Edit issues_ permission in the issue’s project.

### 🔴 What to include when opening an issue

> Please list:
>
> - The Redmine version you use
> - All installed plugins
>
> Conflicts may occur if another plugin modifies the same page elements.
>
> This plugin uses JavaScript extensively.
>
> Open your browser’s JS console ([HowTo](https://webmasters.stackexchange.com/a/77337)), reproduce the problem, and review the console output.
> Copy and paste the result into your GitHub issue and expand any relevant objects (for example, error data).
>
> These details will help identify whether the problem comes from an AJAX request or a JavaScript error.

### 🔎 Example

![Gif that represents dynamic edition of field from the detailled issue's view](/doc/edit.gif)

### 📦 Installation

1. Clone the repository into your Redmine `plugins` directory. The folder must be named `redmine_issue_dynamic_edit`:
   ```
   cd /path/to/redmine/plugins
   git clone https://github.com/ablida/redmine_issue_dynamic_edit.git redmine_issue_dynamic_edit
   ```
2. Restart Redmine. The plugin has no database migrations and no gem dependencies.
3. Open _Administration → Plugins → Redmine Dynamic edit Issue plugin → Configure_, check the settings and **save them once** (see the note on defaults below).

To update, run `git pull` inside the plugin folder and restart Redmine.

### ⚙ Configuration

All options are set in _Administration → Plugins → Redmine Dynamic edit Issue plugin → Configure_:

| Setting                     | Values                         | Default | Description                                                                                                                 |
| --------------------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| Display edit icon mode      | Single, Multiple               | Single  | _Single_: the pencil appears when hovering a value. _Multiple_: hovering the details block shows all pencils at once        |
| Listener action for value   | Click, Double click, None      | Click   | Event on the value that opens the editor. _None_ disables opening from the value                                            |
| Listener action for icon    | Click, Double click, None      | Click   | Event on the pencil icon that opens the editor                                                                              |
| Listener target area        | Value, Pencil icon, Label, All | All     | Area that reacts to the value listener. _All_ is the whole line (label + value + icons)                                     |
| Excluded field IDs          | list of tags                   | empty   | Fields that get no editor (see below)                                                                                       |
| Check issue update conflict | on / off                       | off     | Detects updates by other users and blocks overwriting them (see below)                                                      |
| Force HTTPS for AJAX calls  | on / off                       | off     | Sends the plugin’s requests over HTTPS. Use it if the browser console reports _Mixed Content_ errors behind a reverse proxy |

**Defaults before the first save:** until the settings are saved once, Redmine uses the defaults listed above. Older versions of the configuration page displayed some of these defaults incorrectly (e.g. the conflict check appeared unchecked although it was active). Saving the configuration page once stores the values explicitly.

#### Excluded field IDs

Enter the ID of the field as used in the issue edit form, without the `issue_` prefix and without an `_id` suffix. Type the ID and press `Enter` to add it as a tag. Examples:

- Standard attributes: `status`, `priority`, `assigned_to`, `category`, `fixed_version`, `start_date`, `due_date`, `done_ratio`, `estimated_hours`
- Subject and description: `subject`, `description`
- Custom fields: `custom_field_values_` followed by the custom field’s ID, e.g. `custom_field_values_4` (the ID is shown in the URL when editing the custom field under _Administration → Custom fields_)

#### Conflict check

When _Check issue update conflict_ is enabled, each open issue page reloads the issue in the background **every 5 seconds** while the browser tab is visible, and compares its lock version with the one loaded in the page. The same check runs right before every inline update.

If someone else has updated the issue in the meantime, a notice is shown at the top of the page, inline updates are no longer sent and the background check stops. Reload the page to continue editing; unsaved changes made in the page are lost.

Each check is a full request of the issue page, so with many open issue tabs this produces noticeable load on the server and many entries in the browser’s network tab. If you don’t need the protection, disable the option. Inline updates then always overwrite the current values, including changes other users made after you opened the page.

### 🎨 Customization

You can adjust the visual style in `assets/stylesheets/issue_dynamic_edit.css` to match your theme. Useful selectors:

- `.iconEdit`: pencil icon
- `.iconCopy`: clipboard icon (`.iconCopy.copied` after a successful copy, `.iconCopy.copyError` if copying failed)
- `.dynamicEditField`: editor popup (`.dynamicEditField.open` while visible)
- `.refreshData`: ⟳ button next to the subject

Icons and editors are hidden when printing.

### 🆕 Changelog

- **v 0.9.4** (ablida fork)
  - Copy-to-clipboard icon next to the pencil for attributes, custom fields, subject and description (with fallback for non-HTTPS installations)
  - Open editor closes when clicking outside of it
  - Description is edited in place instead of in a popup; clicking the description text no longer opens the editor, use the pencil icon
  - Multi-select fields send all selected values
  - Default listener target changed from _Value_ to _All_
  - German translation added
  - Fixed: a validation error (e.g. missing required field) raised a JavaScript error (`Assignment to constant variable`) and left the page in an inconsistent state. The error is now shown and the stored values are reloaded
  - Fixed: the last history entry was added a second time when an update created no journal (e.g. ⟳ button, unchanged value)
  - Fixed: the conflict check compared lock versions as text, so a conflict from version 9 to 10 was not detected. The check also stops polling once a conflict has been detected
  - Fixed: the configuration page showed defaults incorrectly before the settings were saved once (the conflict check looked disabled while it was active)
  - Removed the obsolete `issue_dynamic_edit_configuration_file.js`, which was not loaded anymore since the settings moved to the administration panel
- **v 0.9.3** : Add admin panel to settings section, fixes #127 #126 #96
- **v 0.9.2** : JSToolbar fixed (#100)
- **v 0.9.1** : Check version improved (avoiding update conflicts) : using [Redmine REST API](https://www.redmine.org/projects/redmine/wiki/rest_issues) and disabling check when tab is not focused (#97)
- **v 0.9.0** : JS rewritten to remove jQuery code
- **v 0.8.1** : fixed Github issue #89 : Issue version check (AJAX call) may give glitch while editing text + disable global event listener on ajaxSend
- **v 0.8.0** : Complete rework. Compatible with last Redmine version. New settings added : `_CONF_CHECK_ISSUE_UPDATE_CONFLICT` (#70 #88). Removed external lib (FontAwesome) (#74). Mobile style added (#87). Print style added (#84). Bug fix (#79, #85)
- **v 0.7.2** : New settings added into config file (`_CONF_DISPLAY_EDIT_ICON` and `_CONF_LISTENER_TYPE_ICON`) see Configuration part for more info ; new event `none` for `_CONF_LISTENER_TYPE_VALUE` disabling listener on value ; css fix
- **v 0.7.1** : Fixed incorrect DOM structure if user has read only access to the issue (#61 #64)
- **v 0.7.0** : Category filter by project added (#55) and prevent dialog closing when using fa-pencil selector (#59)
- **v 0.6.9** : Category field support (Github request #54)
- **v 0.6.8** : Checkboxes custom fields fixed (#53)
- **v 0.6.7** : fixed Github issue #46 : text field focus issue
- **v 0.6.6** : New configuration file + Multiple fixes (#30 #31 #35 #36 #37 #38 #41)
- **v 0.6.5** : Checklists plugin support (and all other plugins that compute fields when there's an issue update) (Github requests #26 and #28) + custom url support (Github request #29)
- **v 0.6.4** : version field with checkbox display is now supported, Target version and Assignee fields are also supported (Github request #24)
- **v 0.6.3** : fixed Github issue #22 : DatepickerFallback raised an error
- **v 0.6.2** : fixed Github issue #22 : long description is now supported (no more 414 errors)
- **v 0.6.1** : fixed Github issue #20
- **v 0.6.0** : **NOW WITH CUSTOM FIELDS SUPPORT** ! (Github #19)
- **v 0.5.0** : fixed Github issue #18 : textarea fixed (jstoolbar or ckeditor)
- **v 0.4.9** : fixed Github issue #17 : Datepicker fallback added for date fields
- **v 0.4.8** : fixed Github issues #15 and #16
- **v 0.4.7** : if error on dynamic update, put back old values in details block (fixed Github issue #8)
- **v 0.4.6** : description is now dynamically editable (edit field appears if there's already a description written) (Github request #14)
- **v 0.4.5** : fixed Github issue #13 : CSS display for custom attributes, added Title dynamic edition (Github request #14)
- **v 0.4.4** : fixed Github issues #6, #12 : User can't update status until all required field are filled for this step of the issue
- **v 0.4.3** : partially fixed Github issue #12 : Read only attributes can't be edited anymore. Dynamic refresh for read only attributes when status changes
- **v 0.4.2** : fixed Github issue #10 : History list updated after modification
- **v 0.4.1** : fixed Github issue #7 : update status list to follow Redmine workflow
- **v 0.4.0** : fixed Github issues #2, #4, #9. Edited dropdown display
- **v 0.3.0** : start date, due date, ratio and estimated time fields are now dynamically editable. Translation files added (en, fr). Log added in console when AJAX fails
- **v 0.2.0** : fixed "conflict" when trying to add a note after an update from dropdowns. New method used, REST API is not required anymore
- **v 0.1.0** : initial commit
