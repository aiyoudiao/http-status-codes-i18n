/**
 * © 2024 aiyoudiao
 * 
 * Ce fichier a été créé par aiyoudiao, contenant beaucoup de travail acharné et de sagesse.
 * 
 * Vous êtes libres d'utiliser, de modifier et de distribuer ce fichier, mais veuillez conserver cette notice de droits d'auteur.
 * 
 * Si vous trouvez ce fichier utile, veuillez me donner une étoile ou me suivre ツ.
 * 
 * Contacts :
 * - Courriel :,newdiao@163.com,
 * - GitHub :,https://github.com/aiyoudiao,
 * 
 * Bonne programmation! Rappelez-vous, le code est de la poésie et le front-end est un art. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuer : Le serveur a reçu les en-têtes de la demande et que le client doit poursuivre l'envoi du corps de la demande. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Changement de protocole : Le demandeur a demandé au serveur de changer de protocole et le serveur a confirmé qu'il le ferait. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Traitement : Le serveur a reçu et est en train de traiter la demande, mais aucune réponse n'est disponible pour l'instant. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK : La réponse standard pour les requêtes HTTP réussies. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Créé : La demande a été satisfaite et une nouvelle ressource a été créée. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Information non autoritative : HTTP 1.1. Le serveur a traité avec succès la demande, mais renvoie des informations provenant d'une autre source. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Aucun contenu : Le serveur a accepté la demande mais n'est pas en train de retourner aucun contenu. Cela est souvent utilisé en tant que réponse à une demande DELETE. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Réinitialisation du contenu : Similaire à une réponse 204 sans contenu, mais cette réponse exige que le demandeur réinitialise la vue du document. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenu partiel : Le serveur fournit seulement une partie du contenu, telle que demandée par le client via un en-tête de plage. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-état : Le corps du message qui suit est un message XML et peut contenir un certain nombre de codes de réponse distincts, en fonction du nombre de sous-demande émises. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Déjà rapporté : Les membres d'un lien DAV ont déjà été énumérés dans une réponse précédente à cette demande et ne sont pas inclus à nouveau. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM utilisé : Le serveur a exécuté une demande GET pour la ressource, et la réponse représente le résultat d'une ou plusieurs opérations d'instance appliquées à l'instance actuelle. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Choix multiples : Il existe plusieurs options parmi lesquelles le client peut opérer. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Déplacé en permanence : La ressource a été déplacée et toutes les demandes ultérieures doivent référencer sa nouvelle URI. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Trouvé : La spécification HTTP 1.0 a décrit cet état comme "Déplacé temporairement", mais les navigateurs populaires répondent à cet état de manière similaire au comportement prévu pour 303. La ressource peut être récupérée en référenceant l'URI retourné. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Voir autre : La ressource peut être récupérée en suivant d'autres URI en utilisant la méthode GET. Lorsque cette réponse est reçue en réponse à une demande POST, PUT ou DELETE, on peut généralement supposer que le serveur a traité la demande avec succès et dirige le client vers un point d'information. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Non modifié : La ressource n'a pas été modifiée depuis la version spécifiée dans les en-têtes If-Modified-Since ou If-Match. La ressource ne sera pas retournée dans le corps de la réponse. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Utilisation d'un proxy : HTTP 1.1. La ressource n'est disponible que via un proxy et l'adresse est fournie en réponse. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Changement de proxy : obsolète dans HTTP 1.1. Utilisé pour signifier que les demandes suivantes doivent être envoyées en utilisant le proxy spécifié. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirection temporaire : HTTP 1.1. La demande doit être répétée avec l'URI fourni dans la réponse, mais les demandes futures doivent toujours appeler l'URI d'origine. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Résumé incomplet (Google) : Ce code est utilisé dans la proposition de requêtes HTTP résumables pour reprendre les requêtes PUT ou POST interrompues. Redirection permanente : Les requêtes et toutes les requêtes futures doivent être renvoyées en utilisant l'URI fourni dans la réponse. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Demande incorrecte : La demande ne peut pas être satisfaite en raison de la syntaxe incorrecte de la demande. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Non autorisé : Le demandeur n'est pas autorisé à accéder à la ressource. C'est similaire à 403 mais est utilisé dans les cas où l'authentification est attendue mais a échoué ou n'a pas été fournie. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Paiement requis : Réservé pour une utilisation future. Certains services web utilisent ce code d'état pour indiquer que le client a envoyé un nombre excessif de demandes. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Interdit : La demande était correctement formulée, mais le serveur refuse de fournir la ressource demandée. Contrairement à 401, l'authentification n'aura pas d'incidence sur la réponse du serveur. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Non trouvé : La ressource n'a pas pu être trouvée. Ceci est souvent utilisé comme un général pour toutes les URI invalides demandées par le serveur. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Méthode non autorisée : La ressource a été demandée en utilisant une méthode qui n'est pas autorisée. Par exemple, demander une ressource via la méthode POST lorsque la ressource ne supporte que la méthode GET. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Non acceptable : La ressource est valide, mais ne peut pas être fournie dans le format spécifié dans les entêtes Accept de la demande. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Authentification par proxy requise : Avant que les demandes puissent être satisfaites, l'authentification auprès du proxy est requise. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de la demande : Le serveur a expiré en attendant une demande du client. Le client est autorisé à répéter la demande. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflit : La demande ne peut pas être satisfaite en raison d'un conflit dans les paramètres de la demande. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Disparu : La ressource n'est plus disponible à l'URI demandée et aucune redirection ne sera donnée. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longueur requise : La demande n'a pas spécifié la longueur de son contenu, comme l'exige la ressource. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Échec des conditions préalables : Le serveur ne satisfait pas l'une des conditions préalables spécifiées par le client. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entité de demande trop volumineuse : Le contenu de la demande est plus volumineux que ce que le serveur est capable de traiter. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de la demande trop long : L'URI fourni dans la demande est trop long pour que le serveur puisse le traiter. Ceci est souvent utilisé lorsque trop de données ont été encodées dans l'URI d'une demande GET et qu'une demande POST devrait être utilisée à la place. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Type de média non pris en charge : Les données fournies par le client ont un type de média que le serveur ne prend pas en charge. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Plage demandée insatisfaisable : Le client a demandé une partie de la ressource, mais le serveur ne peut pas fournir cette partie. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Échec de l'attente : Le serveur ne peut pas satisfaire les exigences du champ d'en-tête de la requête Expect. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Je suis une théière : Toute tentative de faire du café avec une théière devrait entraîner le code d'erreur "418 Je suis une théière". Le corps de l'entité résultant PEUT être court et trapu. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Demande mal orientée : La demande a été dirigée vers un serveur qui n'est pas en mesure de produire une réponse. Ce code d'état peut être envoyé par un serveur qui n'est pas configuré pour répondre à la combinaison du schéma et de l'autorité inclus dans l'URI de la demande. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entité non traitable : La demande était correctement formatée mais ne peut pas être traitée sous sa forme actuelle. Souvent utilisée lorsque les paramètres spécifiés échouent aux erreurs de validation. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Verrouillé : La ressource demandée a été trouvée, mais elle est verrouillée et ne sera pas rendue. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Échec de dépendance : La demande a échoué en raison d'un échec d'une demande précédente. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Mise à niveau requise : Le client doit répéter la demande en utilisant un protocole mis à niveau, tel que TLS 1.0. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Précondition requise : Le serveur d'origine exige que la demande soit conditionnelle. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Trop de demandes : L'utilisateur a envoyé trop de demandes dans un laps de temps donné ("limitation de débit"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Champs d'en-tête de la requête trop volumineux : Le serveur est réticent à traiter la requête car ses champs d'en-tête sont trop volumineux. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout de connexion (Microsoft) : une extension de Microsoft. Indique que votre session a expiré. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * "Pas de réponse (Nginx) : Utilisé dans les journaux Nginx pour indiquer que le serveur n'a renvoyé aucune information au client et a fermé la connexion (utile comme moyen de dissuasion contre les logiciels malveillants)." 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft) : Une extension de Microsoft. La requête doit être retransmise après avoir effectué l'action appropriée. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloqué par les contrôles parentaux de Windows (Microsoft) : une extension de Microsoft. Cette erreur est donnée lorsque les contrôles parentaux de Windows sont activés et bloquent l'accès à la page Web donnée. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirection (Microsoft) : Utilisé dans Exchange ActiveSync s'il existe un serveur plus efficace à utiliser ou si le serveur n'a pas accès à la boîte aux lettres des utilisateurs. Pour des raisons légales indisponible : Le serveur est incapable d'opérer en raison d'une demande liée à des contraintes légales. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * En-tête de demande trop volumineux (Nginx) : Code interne de Nginx similaire à 431, mais introduit plus tôt dans la version 0.9.4 (le 21 janvier 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Erreur de certificat (Nginx) : Code interne de Nginx utilisé lors d'un erreur de certificat client SSL pour le distinguer des 4XX dans un journal et une redirection de page d'erreur. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx) : Code interne de Nginx utilisé lorsque le client n'a pas fourni de certificat pour le distinguer des 4XX dans un journal et la redirection d'une page d'erreur.
   * Certificat absent : Code interne de Nginx utilisé lorsque le client n'a pas fourni de certificat pour le distinguer des 4XX dans un journal et la redirection d'une page d'erreur. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP vers HTTPS (Nginx) : Le code interne de Nginx utilisé pour les requêtes HTTP brutes envoyées au port HTTPS afin de le distinguer des 4XX dans un journal et la redirection de la page d'erreur. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Expiré / invalide du jeton (Esri) : Retourné par ArcGIS for Server. Un code de 498 indique un jeton expiré ou autrement invalide. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token requis (Esri) : Retourné par ArcGIS for Server. Un code 499 indique qu'un token est requis (si aucun token n'a été soumis). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erreur interne du serveur : Un état générique pour une erreur au sein du serveur lui-même. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Non implémenté : Le serveur ne peut pas répondre à la demande. Cela signifie généralement que le serveur pourrait éventuellement prendre en charge cette demande à l'avenir - sinon, un code d'état 4xx pourrait être plus approprié. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Passerelle incorrecte : Lorsque le serveur agit en tant que proxy, il n'a pas reçu de réponse acceptable du serveur en amont. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service indisponible : Le serveur est en panne et n'accepte pas les demandes. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout de la passerelle : Le serveur agit en tant que proxy et n'a pas reçu de réponse du serveur en amont. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Version HTTP non prise en charge : Le serveur ne prend pas en charge la version du protocole HTTP spécifiée dans la demande. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante négocie également : une négociation de contenu transparente pour la demande entraîne une référence circulaire. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuffisance de stockage : L'utilisateur ou le serveur n'a pas de quota de stockage suffisant pour satisfaire la demande. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Détection de boucle : Le serveur a détecté une boucle infinie dans la demande. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Limite de bande passante dépassée (extension bw/limitée d'Apache) : Ce code d'état n'est pas spécifié dans aucune RFC. Son utilisation est inconnue. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Non étendu : Des extensions supplémentaires de la demande sont nécessaires pour qu'elle soit satisfaite. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Authentification réseau requise : Le client doit s'authentifier auprès du réseau avant d'envoyer des requêtes. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Erreur inconnue (Microsoft / CloudFlare) : Ce code d'état n'est pas spécifié dans aucun RFC et est renvoyé par certains services, par exemple les serveurs Microsoft Azure et CloudFlare : "L'erreur 520 est essentiellement une réponse 'tout compris' lorsque le serveur d'origine renvoie quelque chose d'inattendu ou quelque chose qui n'est pas toléré/interpreté (violation de protocole ou réponse vide)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Serveur Web est en panne (CloudFlare) : Le serveur d'origine a refusé la connexion provenant de CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout de connexion (CloudFlare) : CloudFlare n'a pas pu négocier un handshake TCP avec le serveur d'origine. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origine inaccessible (CloudFlare) : CloudFlare n'a pas pu atteindre le serveur d'origine ; par exemple, si les enregistrements DNS du serveur d'origine sont incorrects. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Un timeout s'est produit (CloudFlare) : CloudFlare a été en mesure d'établir une connexion TCP vers le serveur d'origine, mais n'a pas reçu une réponse HTTP en temps opportun. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Échec de la prise de main SSL (CloudFlare) : CloudFlare n'a pas pu négocier une prise de main SSL/TLS avec le serveur d'origine. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificat SSL invalide (CloudFlare) : CloudFlare n'a pas pu valider le certificat SSL/TLS présenté par le serveur d'origine. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Erreur Railgun (CloudFlare) : La requête a expiré ou échoué après l'établissement de la connexion WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuer : Le serveur a reçu les en-têtes de la demande et que le client doit poursuivre l'envoi du corps de la demande. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Changement de protocole : Le demandeur a demandé au serveur de changer de protocole et le serveur a confirmé qu'il le ferait. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Traitement : Le serveur a reçu et est en train de traiter la demande, mais aucune réponse n'est disponible pour l'instant. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK : La réponse standard pour les requêtes HTTP réussies. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Créé : La demande a été satisfaite et une nouvelle ressource a été créée. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Information non autoritative : HTTP 1.1. Le serveur a traité avec succès la demande, mais renvoie des informations provenant d'une autre source. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Aucun contenu : Le serveur a accepté la demande mais n'est pas en train de retourner aucun contenu. Cela est souvent utilisé en tant que réponse à une demande DELETE. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Réinitialisation du contenu : Similaire à une réponse 204 sans contenu, mais cette réponse exige que le demandeur réinitialise la vue du document. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenu partiel : Le serveur fournit seulement une partie du contenu, telle que demandée par le client via un en-tête de plage. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-état : Le corps du message qui suit est un message XML et peut contenir un certain nombre de codes de réponse distincts, en fonction du nombre de sous-demande émises. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Déjà rapporté : Les membres d'un lien DAV ont déjà été énumérés dans une réponse précédente à cette demande et ne sont pas inclus à nouveau. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM utilisé : Le serveur a exécuté une demande GET pour la ressource, et la réponse représente le résultat d'une ou plusieurs opérations d'instance appliquées à l'instance actuelle. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Choix multiples : Il existe plusieurs options parmi lesquelles le client peut opérer. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Déplacé en permanence : La ressource a été déplacée et toutes les demandes ultérieures doivent référencer sa nouvelle URI. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Trouvé : La spécification HTTP 1.0 a décrit cet état comme "Déplacé temporairement", mais les navigateurs populaires répondent à cet état de manière similaire au comportement prévu pour 303. La ressource peut être récupérée en référenceant l'URI retourné. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Voir autre : La ressource peut être récupérée en suivant d'autres URI en utilisant la méthode GET. Lorsque cette réponse est reçue en réponse à une demande POST, PUT ou DELETE, on peut généralement supposer que le serveur a traité la demande avec succès et dirige le client vers un point d'information. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Non modifié : La ressource n'a pas été modifiée depuis la version spécifiée dans les en-têtes If-Modified-Since ou If-Match. La ressource ne sera pas retournée dans le corps de la réponse. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Utilisation d'un proxy : HTTP 1.1. La ressource n'est disponible que via un proxy et l'adresse est fournie en réponse. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Changement de proxy : obsolète dans HTTP 1.1. Utilisé pour signifier que les demandes suivantes doivent être envoyées en utilisant le proxy spécifié. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirection temporaire : HTTP 1.1. La demande doit être répétée avec l'URI fourni dans la réponse, mais les demandes futures doivent toujours appeler l'URI d'origine. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Résumé incomplet (Google) : Ce code est utilisé dans la proposition de requêtes HTTP résumables pour reprendre les requêtes PUT ou POST interrompues. Redirection permanente : Les requêtes et toutes les requêtes futures doivent être renvoyées en utilisant l'URI fourni dans la réponse. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Demande incorrecte : La demande ne peut pas être satisfaite en raison de la syntaxe incorrecte de la demande. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Non autorisé : Le demandeur n'est pas autorisé à accéder à la ressource. C'est similaire à 403 mais est utilisé dans les cas où l'authentification est attendue mais a échoué ou n'a pas été fournie. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Paiement requis : Réservé pour une utilisation future. Certains services web utilisent ce code d'état pour indiquer que le client a envoyé un nombre excessif de demandes. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Interdit : La demande était correctement formulée, mais le serveur refuse de fournir la ressource demandée. Contrairement à 401, l'authentification n'aura pas d'incidence sur la réponse du serveur. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Non trouvé : La ressource n'a pas pu être trouvée. Ceci est souvent utilisé comme un général pour toutes les URI invalides demandées par le serveur. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Méthode non autorisée : La ressource a été demandée en utilisant une méthode qui n'est pas autorisée. Par exemple, demander une ressource via la méthode POST lorsque la ressource ne supporte que la méthode GET. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Non acceptable : La ressource est valide, mais ne peut pas être fournie dans le format spécifié dans les entêtes Accept de la demande. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Authentification par proxy requise : Avant que les demandes puissent être satisfaites, l'authentification auprès du proxy est requise. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de la demande : Le serveur a expiré en attendant une demande du client. Le client est autorisé à répéter la demande. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflit : La demande ne peut pas être satisfaite en raison d'un conflit dans les paramètres de la demande. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Disparu : La ressource n'est plus disponible à l'URI demandée et aucune redirection ne sera donnée. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longueur requise : La demande n'a pas spécifié la longueur de son contenu, comme l'exige la ressource. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Échec des conditions préalables : Le serveur ne satisfait pas l'une des conditions préalables spécifiées par le client. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entité de demande trop volumineuse : Le contenu de la demande est plus volumineux que ce que le serveur est capable de traiter. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de la demande trop long : L'URI fourni dans la demande est trop long pour que le serveur puisse le traiter. Ceci est souvent utilisé lorsque trop de données ont été encodées dans l'URI d'une demande GET et qu'une demande POST devrait être utilisée à la place. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Type de média non pris en charge : Les données fournies par le client ont un type de média que le serveur ne prend pas en charge. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Plage demandée insatisfaisable : Le client a demandé une partie de la ressource, mais le serveur ne peut pas fournir cette partie. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Échec de l'attente : Le serveur ne peut pas satisfaire les exigences du champ d'en-tête de la requête Expect. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Je suis une théière : Toute tentative de faire du café avec une théière devrait entraîner le code d'erreur "418 Je suis une théière". Le corps de l'entité résultant PEUT être court et trapu. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Demande mal orientée : La demande a été dirigée vers un serveur qui n'est pas en mesure de produire une réponse. Ce code d'état peut être envoyé par un serveur qui n'est pas configuré pour répondre à la combinaison du schéma et de l'autorité inclus dans l'URI de la demande. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entité non traitable : La demande était correctement formatée mais ne peut pas être traitée sous sa forme actuelle. Souvent utilisée lorsque les paramètres spécifiés échouent aux erreurs de validation. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Verrouillé : La ressource demandée a été trouvée, mais elle est verrouillée et ne sera pas rendue. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Échec de dépendance : La demande a échoué en raison d'un échec d'une demande précédente. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Mise à niveau requise : Le client doit répéter la demande en utilisant un protocole mis à niveau, tel que TLS 1.0. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Précondition requise : Le serveur d'origine exige que la demande soit conditionnelle. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Trop de demandes : L'utilisateur a envoyé trop de demandes dans un laps de temps donné ("limitation de débit"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Champs d'en-tête de la requête trop volumineux : Le serveur est réticent à traiter la requête car ses champs d'en-tête sont trop volumineux. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Timeout de connexion (Microsoft) : une extension de Microsoft. Indique que votre session a expiré. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * "Pas de réponse (Nginx) : Utilisé dans les journaux Nginx pour indiquer que le serveur n'a renvoyé aucune information au client et a fermé la connexion (utile comme moyen de dissuasion contre les logiciels malveillants)." 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft) : Une extension de Microsoft. La requête doit être retransmise après avoir effectué l'action appropriée. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Bloqué par les contrôles parentaux de Windows (Microsoft) : une extension de Microsoft. Cette erreur est donnée lorsque les contrôles parentaux de Windows sont activés et bloquent l'accès à la page Web donnée. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirection (Microsoft) : Utilisé dans Exchange ActiveSync s'il existe un serveur plus efficace à utiliser ou si le serveur n'a pas accès à la boîte aux lettres des utilisateurs. Pour des raisons légales indisponible : Le serveur est incapable d'opérer en raison d'une demande liée à des contraintes légales. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * En-tête de demande trop volumineux (Nginx) : Code interne de Nginx similaire à 431, mais introduit plus tôt dans la version 0.9.4 (le 21 janvier 2011). 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Erreur de certificat (Nginx) : Code interne de Nginx utilisé lors d'un erreur de certificat client SSL pour le distinguer des 4XX dans un journal et une redirection de page d'erreur. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx) : Code interne de Nginx utilisé lorsque le client n'a pas fourni de certificat pour le distinguer des 4XX dans un journal et la redirection d'une page d'erreur.
   * Certificat absent : Code interne de Nginx utilisé lorsque le client n'a pas fourni de certificat pour le distinguer des 4XX dans un journal et la redirection d'une page d'erreur. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP vers HTTPS (Nginx) : Le code interne de Nginx utilisé pour les requêtes HTTP brutes envoyées au port HTTPS afin de le distinguer des 4XX dans un journal et la redirection de la page d'erreur. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Expiré / invalide du jeton (Esri) : Retourné par ArcGIS for Server. Un code de 498 indique un jeton expiré ou autrement invalide. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token requis (Esri) : Retourné par ArcGIS for Server. Un code 499 indique qu'un token est requis (si aucun token n'a été soumis). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erreur interne du serveur : Un état générique pour une erreur au sein du serveur lui-même. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Non implémenté : Le serveur ne peut pas répondre à la demande. Cela signifie généralement que le serveur pourrait éventuellement prendre en charge cette demande à l'avenir - sinon, un code d'état 4xx pourrait être plus approprié. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Passerelle incorrecte : Lorsque le serveur agit en tant que proxy, il n'a pas reçu de réponse acceptable du serveur en amont. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service indisponible : Le serveur est en panne et n'accepte pas les demandes. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout de la passerelle : Le serveur agit en tant que proxy et n'a pas reçu de réponse du serveur en amont. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Version HTTP non prise en charge : Le serveur ne prend pas en charge la version du protocole HTTP spécifiée dans la demande. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante négocie également : une négociation de contenu transparente pour la demande entraîne une référence circulaire. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuffisance de stockage : L'utilisateur ou le serveur n'a pas de quota de stockage suffisant pour satisfaire la demande. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Détection de boucle : Le serveur a détecté une boucle infinie dans la demande. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Limite de bande passante dépassée (extension bw/limitée d'Apache) : Ce code d'état n'est pas spécifié dans aucune RFC. Son utilisation est inconnue. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Non étendu : Des extensions supplémentaires de la demande sont nécessaires pour qu'elle soit satisfaite. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Authentification réseau requise : Le client doit s'authentifier auprès du réseau avant d'envoyer des requêtes. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Erreur inconnue (Microsoft / CloudFlare) : Ce code d'état n'est pas spécifié dans aucun RFC et est renvoyé par certains services, par exemple les serveurs Microsoft Azure et CloudFlare : "L'erreur 520 est essentiellement une réponse 'tout compris' lorsque le serveur d'origine renvoie quelque chose d'inattendu ou quelque chose qui n'est pas toléré/interpreté (violation de protocole ou réponse vide)." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Serveur Web est en panne (CloudFlare) : Le serveur d'origine a refusé la connexion provenant de CloudFlare. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Timeout de connexion (CloudFlare) : CloudFlare n'a pas pu négocier un handshake TCP avec le serveur d'origine. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origine inaccessible (CloudFlare) : CloudFlare n'a pas pu atteindre le serveur d'origine ; par exemple, si les enregistrements DNS du serveur d'origine sont incorrects. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Un timeout s'est produit (CloudFlare) : CloudFlare a été en mesure d'établir une connexion TCP vers le serveur d'origine, mais n'a pas reçu une réponse HTTP en temps opportun. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * Échec de la prise de main SSL (CloudFlare) : CloudFlare n'a pas pu négocier une prise de main SSL/TLS avec le serveur d'origine. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Certificat SSL invalide (CloudFlare) : CloudFlare n'a pas pu valider le certificat SSL/TLS présenté par le serveur d'origine. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Erreur Railgun (CloudFlare) : La requête a expiré ou échoué après l'établissement de la connexion WAN. 
   */
  h527 = 527
}
