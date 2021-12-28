/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const EntityType = [
  { value: "service", label: "Service", key: 1 },
  { value: "all", label: "All", key: 10 },
  { value: "endpoint", label: "Service Endpoint", key: 3 },
  { value: "serviceInstance", label: "Service Instance", key: 3 },
  { value: "serviceRelationClient", label: "Service Relation(client)", key: 2 },
  { value: "serviceRelationServer", label: "Service Relation(server)", key: 2 },
  {
    value: "serviceInstanceRelationClient",
    label: "Service Instance Relation(client)",
    key: 4,
  },
  {
    value: "serviceInstanceRelationServer",
    label: "Service Instance Relation(server)",
    key: 4,
  },
  { value: "endpointRelation", label: "Endpoint Relation", key: 4 },
];
export const Options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
export const SelectOpts = [
  {
    value: "guide",
    label: "Guide",
    children: [
      {
        value: "disciplines",
        label: "Disciplines",
        children: [
          {
            value: "consistency",
            label: "Consistency",
          },
          {
            value: "feedback",
            label: "Feedback",
          },
          {
            value: "efficiency",
            label: "Efficiency",
          },
          {
            value: "controllability",
            label: "Controllability",
          },
        ],
      },
      {
        value: "navigation",
        label: "Navigation",
        children: [
          {
            value: "side nav",
            label: "Side Navigation",
          },
          {
            value: "top nav",
            label: "Top Navigation",
          },
        ],
      },
    ],
  },
];
