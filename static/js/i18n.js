(function($, eucalyptus) {
  eucalyptus.i18n = function(args) {
    // i18n properties will be loaded before log-in
    $.i18n.properties({
      name:'Messages', 
      path:'custom/', 
      mode:'both',
      language: args.language, 
      callback: function() {
        // when jsrender is used, the variables should be propped to make it available as $.i18n.map 
        $.i18n.prop('text_footer');
        $.i18n.prop('login_title');
        $.i18n.prop('login_acct');
        $.i18n.prop('login_uname');
        $.i18n.prop('login_pwd');
        $.i18n.prop('login_pwd_help');
        $.i18n.prop('login_pwd_link');
        $.i18n.prop('login_btn');

        $.i18n.prop('kp_tbl_hdr_name');
        $.i18n.prop('kp_tbl_hdr_fingerprint');
        $.i18n.prop('table_loading');

        // keypair
        $.i18n.prop('keypair_dialog_del_text');
        $.i18n.prop('keypair_dialog_add_text');
        $.i18n.prop('keypair_dialog_add_name');
        $.i18n.prop('keypair_dialog_add_help');
        $.i18n.prop('keypair_dialog_delete_help');
        $.i18n.prop('keypair_table_help');

        // sgroup
        $.i18n.prop('sgroup_dialog_del_text');
        $.i18n.prop('sgroup_dialog_add_text');
        $.i18n.prop('sgroup_dialog_add_name');
        $.i18n.prop('sgroup_dialog_add_description');

        // volume
        $.i18n.prop('volume_dialog_del_text');
        $.i18n.prop('volume_dialog_add_text');

        // dashboard
        $.i18n.prop('dashboard_az_all');
        $.i18n.prop('dashboard_instance_running');
        $.i18n.prop('dashboard_instance_stopped');
        $.i18n.prop('dashboard_volumes');
        $.i18n.prop('dashboard_snapshots');
        $.i18n.prop('dashboard_buckets');
        $.i18n.prop('dashboard_sgroup');
        $.i18n.prop('dashboard_eip');
        $.i18n.prop('dashboard_keypair');


        // help
        $.i18n.prop('page_help_backto_page');
      }
    });
  }
})(jQuery,
   window.eucalyptus ? window.eucalyptus : window.eucalyptus = {});
