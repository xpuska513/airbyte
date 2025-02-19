#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

from abc import ABC, abstractmethod
from typing import Union

import requests
from airbyte_cdk.sources.declarative.requesters.error_handlers.response_status import ResponseStatus


class ErrorHandler(ABC):
    @property
    @abstractmethod
    def max_retries(self) -> Union[int, None]:
        """
        Specifies maximum amount of retries for backoff policy. Return None for no limit.
        """
        pass

    @abstractmethod
    def should_retry(self, response: requests.Response) -> ResponseStatus:
        """
        Evaluate response status describing whether a failing request should be retried or ignored.
        :param response: response to evaluate
        :return: response status
        """
        pass
