import { useCurrentUser } from 'sanity';

export default function resolveDocumentActions(prev, context) {
  const currentUser  = useCurrentUser();
  
//    // Check if the current user has the required role
  const canPublish = currentUser?.roles.some((role) => role.name === 'administrator');
//   console.log({currentUser,canPublish})

  const defaultActions = prev;
console.log({defaultActions,context})
  if (!canPublish) {
    // Filter out the "Publish" action if the user lacks permission
    return defaultActions.filter((action) => action.action !== 'publish' && action.action !=="unpublish");
  }

  return defaultActions;
}
