
//Form IDs and modules which are hooked to Marketo's API to load

//Marketo loadForm takes the following form:

//MktoForms2.loadForm(baseUrl, munchkinId, formId [,callback]))
//callback takes the form: function (callback) {}


// This script attaches callback functions to the form 

//if no callback is required

// then use the embed code directly but if callback is required, attach the form parameters to marketo.forms 
// and add your callback function to marketo.modules

var marketo = {};
// var debug = true;
marketo.modules = {};

// Helper Methods for Event Hooks.
marketo.utils = {};

(function ($) {

	//Constants used in generating forms
	var _MUNCHKIN_ID = '453-LIZ-762';
	var _BASE_URL = '//app-ab05.marketo.com';

	// Marketo Helper Methods.
	// Add Required and Add Privacy Note dynamically.
	marketo.utils.setRequired = function ($form) {
		var privacy_message = $form.data('privacyMessage');

		var m = {
			privacy: '<p class="mktoForm-message">' + privacy_message + '</p>',
			require: '<p class="mktoForm-message mktoForm-message-required">' + Drupal.t('* Required fields') + '</p>',
		};
		if (privacy_message) {
			$form.append(m.privacy);
		}
		if ($form.find('.mktoRequired').length > 0) {
			$form.append(m.require);
		}
	};

	//Add forms here with custom properties
	marketo.forms = {
		mktoForm_1019 : {
			//optional arguments only needed if different to constants
			// baseUrl : '//app-ab05.marketo.com',
			// formId : '1019',
			// webPageFormId : 'mktoForm_1019',
			// munchkinId : '453-LIZ-762',
			module : marketo.modules.communityDownload 
		},
		mktoForm_1021 : {
			module : marketo.modules.webinar
		}
	};

	//Hooks in forms when rendered
	$(document).ready(function () {
		//Grab forms that need to be rendered and return false if doing default startup
		$forms = $('[id*="mktoForm_"]');
		// console.log($forms);
		$forms.each(function (index, value) {
			var id = $(this).attr('id');
			var args = (marketo.forms[id] !== undefined) ?  marketo.forms[id] : {};
			//Strip out inline styles unless set otherwise (need to add in conditional)
			//Build parameters for form load
			args.formId = id.replace('mktoForm_', '');
			args.baseUrl = (args.baseUrl !== undefined) ? args.baseUrl : _BASE_URL;
			args.munchkinId = (args.munchkinId !== undefined) ? args.munchkinId : _MUNCHKIN_ID;

			//Specifiy module and attach default handler 
			args.module = (args.module !== undefined) ? args.module : marketo.modules.default;
			
			//Load Form
			//Turning off load until fix webinars
			MktoForms2.loadForm(args.baseUrl, args.munchkinId, args.formId, args.module);
		});
		MktoForms2.whenReady(function (form) {
			//Put your code that uses the form object here.
			//console.log("isready: ", form.getFormElem());
			
			// Use form labels as placeholder text
			$form = form.getFormElem();
			typeof something === "undefined"
			if(typeof $form.data('most-recent-lead-source-detail') !== 'undefined'){
   			  form.addHiddenFields({'mostRecentLeadSourceDetail' : $form.data('most-recent-lead-source-detail')});
			}

			if(typeof $form.data('redirect') !== 'undefined'){
   			  form.addHiddenFields({'mostRecentLeadSourceDetail' : $form.data('most-recent-lead-source-detail')});
			}
			
   			form.onSuccess(function(values, followUpUrl){
   			
		      var langprefix = Drupal.settings.pathPrefix;
   			   
			  if(typeof $form.data('redirect') !== 'undefined'){
			  
			    // Do some basic error handling
			    var redirect = $.trim($form.data('redirect'));
   			    // Check slash prefacing the URL
   			    if (redirect.substring(0, 1) == '/') {
   			      redirect = redirect.substring(1);
   				}
     		    
     		    // Add one
     			if(langprefix != ''){
	   		      location.href = '/'+langprefix+redirect;	
     			}else{
                  location.href = '/'+redirect;	
     			}
			  }else{
			    // Do default redirect
			    if (redirect != '<none>'){
	   			  
	   			  if(langprefix != ''){
	   		        location.href = '/'+langprefix+'/thank-you/default';	
     			  }else{
                    location.href = '/thank-you/default';	
     			  }			    
   			    }
   			  }
	          //return false to prevent the submission handler continuing with its own processing
	          return false;
     	    });
			
			$($form).find('.mktoFieldWrap label').each(function(index){
			  $(this).siblings('input').attr("placeholder", $(this).text().replace(':', '').replace('*',''));
			  $(this).siblings('textarea').attr("placeholder", $(this).text().replace(':', '').replace('*', ''));
			  //if ($(this).children('.mktoRequired')){
			  $(this).siblings('.mktoField.mktoRequired').attr('placeholder', $(this).siblings('.mktoField.mktoRequired').attr('placeholder')+' *'); 
			  //}
			 
			  // If there's a select list with options
			  if ($(this).siblings('select').children('option').length > 0){
			    // Get the for info
			    if ($(this).siblings('mktoField.mktoRequired')){
			      $('select#'+$(this).attr('for')+ ' option:first').text($(this).text().replace(':', '').replace('*', '')+'...*');
			    }else{
			  	  //$('select#'+$(this).attr('for')+ ' option:first').text($(this).text().replace(':', '').replace('*', '')+'...');
			    }
			  };
			});
			//ensure placeholder encoded
			//strip out inline styles so our templates can be applied always
			$form.removeAttr('style').find('*').removeAttr('style');

			//Add Required
			marketo.utils.setRequired($form);
		});
	});
})(jQuery);