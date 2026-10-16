require 'redmine'

require_relative './lib/details_issue_hooks.rb'

Redmine::Plugin.register :redmine_issue_dynamic_edit do
  name 'Redmine Dynamic edit Issue plugin'
  author 'Hugo Zilliox | ablida'
  description 'Allows users to dynamically update issue attributes in detailed view without refreshing the page (JIRA style)'
  version '0.9.4'
  url 'https://github.com/ablida/redmine_issue_dynamic_edit'
  author_url 'https://github.com/ablida/'
  settings default: {
    'visual_editor_mode_switch_tab' => '',
    'force_https' => false,
    'display_edit_icon' => 'single',
    'listener_type_value' => 'click',
    'listener_type_icon' => 'click',
    'listener_target' => 'all',
    'excluded_field_id' => '',
    'check_issue_update_conflict' => false
  },
           partial: 'redmine_issue_dynamic_edit/settings'
end
